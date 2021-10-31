import request from "supertest";
import { app } from "../../app";
import { Program } from "../../models/Program-model";

it("returns an error if an invalid inputs", async () => {
  await request(app).post("/api/v1/program").send({}).expect(400);
});

it("create a Program with valid inputs", async () => {
  let programs = await Program.find({});
  expect(programs.length).toEqual(0);

  await request(app)
    .post("/api/v1/program")
    .send({
      school: "school",
      program: "program",
      location: "location",
      length: 1,
    })
    .expect(201);

  programs = await Program.find({});
  expect(programs.length).toEqual(1);
  expect(programs[0].school).toEqual("school");
});
