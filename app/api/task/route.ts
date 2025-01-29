import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { Task } from "@/app/_types/Task";

const prisma = new PrismaClient();

const createErrorResponse = (message: string, status: number = 400) => {
  return NextResponse.json({ success: false, message }, { status });
};

const createSuccessResponse = (data: any, status: number = 200) => {
  return NextResponse.json({ success: true, ...data }, { status });
};

type TaskInput = {
  id?: number;
  title?: string;
  color?: string;
  completed?: boolean;
};

export async function GET() {
  try {
    const tasks: Task[] = await prisma.task.findMany();
    return createSuccessResponse({ tasks });
  } catch (error: any) {
    console.error("GET error:", error);
    return createErrorResponse("Failed to fetch tasks", 500);
  }
}

export async function POST(request: Request) {
  try {
    const body: TaskInput = await request.json();
    const { title, color, completed } = body;

    if (!title) {
      return createErrorResponse("Title is required");
    }

    const task = await prisma.task.create({
      data: {
        title,
        color: color || null,
        completed: completed ?? false,
      },
    });

    return createSuccessResponse({ task });
  } catch (error: unknown) {
    console.error("POST error:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";

    return createErrorResponse(`Failed to create task: ${errorMessage}`, 500);
  }
}

export async function PUT(request: Request) {
  try {
    const body: TaskInput = await request.json();
    const { id, title, color, completed } = body;

    if (!id) {
      return createErrorResponse("Task ID is required");
    }

    const task = await prisma.task.update({
      where: { id },
      data: {
        title,
        color,
        completed,
      },
    });

    return createSuccessResponse({ task });
  } catch (error: any) {
    console.error("PUT error:", error);
    return createErrorResponse("Failed to update task", 500);
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return createErrorResponse("Task ID is required");
    }

    await prisma.task.delete({
      where: { id: Number(id) },
    });

    return createSuccessResponse({ message: "Task deleted successfully" });
  } catch (error: any) {
    console.error("DELETE error:", error);
    return createErrorResponse("Failed to delete task", 500);
  }
}
