import prisma from "@/utils/db";

const prismaHandlers = async () => {
  return prisma.task.findMany();
};

const PrismaPage = async () => {
  const tasks = await prismaHandlers();

  if (tasks.length === 0) {
    return <h2 className="mt-8 font-medium text-lg">No tasks to show...</h2>;
  }

  return (
    <div>
      <h1 className="text-3xl">PrismaPage</h1>
      {tasks?.map((task) => (
        <h2 key={task.id} className="text-xl py-2">
          {task.content}
        </h2>
      ))}
    </div>
  );
};

export default PrismaPage;
