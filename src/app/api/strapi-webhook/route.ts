import { revalidatePath } from "next/cache";

export const POST = async (req: Request) => {
  try {
    const res = await req.json();
    const { documentId } = res.entry;

    if (documentId) {
      console.log(`[Next.js] Revalidating /posts/${documentId}`);
      revalidatePath(`/posts/${documentId}`);
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      return new Response(`Webhook error: ${error.message}`, {
        status: 400,
      });
    }
    return new Response("An unknown error occured", {
      status: 400,
    });
  }

  return new Response("Webhook received", {
    status: 200,
  });
};
