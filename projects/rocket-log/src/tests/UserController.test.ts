import { describe } from "node:test"
import request from "supertest";
import { app } from "@/app.js";

describe("UsersController", () => {
  it("shoud create a new user successfully", async () => {
    const response = await request(app).post("/users").send({
      name: "test",
      email: "test@test.com",
      password: "test123"
    })

    expect(response.status).toBe(201)
    expect(response.body).toHaveProperty("id")
    expect(response.body.name).toBe("Test User")
  })
})