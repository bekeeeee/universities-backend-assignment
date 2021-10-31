import request from "supertest";
import mongoose from "mongoose";

import { app } from "../../app";

it("returns a 400 if the provided id does not exist", async () => {
  const id = new mongoose.Types.ObjectId().toHexString();
  await request(app)
    .patch(`/api/v1/program/${id}`)
    .send({
      school: "updated",
    })
    .expect(400);
});

it("returns a 400 if the user provides an invalid input ", async () => {
  const response = await request(app).post("/api/v1/program").send({
    school: "test program",
    program: "test program",
    location: "test location",
    length: 1,
  });
  console.log("response==", response.body);
  await request(app)
    .patch(`/api/v1/program/${response.body.data?.id}`)
    .send({
      school: "g",
    })
    .expect(400);
});

it("updates the post provided valid inputs", async () => {
  const response = await request(app).post("/api/v1/program").send({
    school: "test program",
    program: "test program",
    location: "test location",
    length: 1,
  });

  await request(app)
    .patch(`/api/v1/program/${response.body.data.id}`)
    .send({
      school: "updated",
    })
    .expect(200);

  await request(app)
    .patch(`/api/v1/program/${response.body.data.id}`)
    .send({
      program: "updated",
    })
    .expect(200);
});
