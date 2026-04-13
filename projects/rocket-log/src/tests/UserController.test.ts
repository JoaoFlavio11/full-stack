import { describe } from "node:test"
import request from "supertest";
import { app } from "@/app.js";
import { prisma } from "@/database/prisma.js";

describe("UsersController", () => {
  let user_id: string

  afterAll(async () => {
    await prisma.user.delete({where: {id: user_id} })
  })

  it("shoud create a new user successfully", async () => {
    const response = await request(app).post("/users").send({
      name: "test",
      email: "test@test.com",
      password: "test123"
    })

    expect(response.status).toBe(201)
    expect(response.body).toHaveProperty("id")
    expect(response.body.name).toBe("Test User")

    user_id = response.body.id
  })

  it("should throw an error if user with same email already exists", async () => {
    const response = await request(app).post("/users").send({
      name: "duplicate email",
      email: "test@test.com",
      password: "test123"
    })
    expect(response.status).toBe(400)
    expect(response.body.message).toBe("User with same email already exists")
  })

  it("shoud throw a validation error if email is invalid", async () => {
    const response = (await request(app).post("/users")).setEncoding({
      name:"test user",
      email:"invalid",
      password:"password"
    })

    expect(response.status).toBe(400)
    expect(response.body.message).toBe("validation error")
  })
})