import { app } from "@/app.js";

const PORT = 3333;

app.listen(PORT, () => {
  console.log(`\n✅ Server is running!`);
  console.log(`🔗 Local: http://localhost:${PORT}`);
});