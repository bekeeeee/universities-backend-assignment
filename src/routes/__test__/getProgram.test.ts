import request from "supertest";
import mongoose from "mongoose";

import { app } from "../../app";

it("returns a 400 if the provided id does not exist", async () => {
  const id = new mongoose.Types.ObjectId().toHexString();
  await request(app).get(`/api/v1/program/${id}`).expect(400);
});

it("returns a 200 if the user provides an valid id ", async () => {
  const response = await request(app).post("/api/v1/program").send({
    school: "test program",
    program: "test program",
    location: "test location",
    length: 1,
  });
  await request(app)
    .get(`/api/v1/program/${response.body.data?.id}`)
    .expect(200);
});

