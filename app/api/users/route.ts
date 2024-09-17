import { fetchUsers, saveUser } from "@/utils/actions";
import { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  console.log(request.url);
  console.log(request.nextUrl.searchParams.get("id"));

  const users = await fetchUsers();
  // return Response.json({ users });
  return Response.json({ users });
};

export const POST = async (request: Request) => {
  const user = await request.json();
  const newUser = { ...user, id: Date.now().toString() };
  await saveUser(newUser);
  return Response.json({ msg: "user created" });
};
