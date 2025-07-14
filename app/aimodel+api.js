import Replicate from "replicate";

// const replicate = new Replicate({
//   auth: process.env.REPLICATE_API_KEY,
// });
const replicate = new Replicate({
  auth: process.env.REPLICATE_API_KEY,
  useFileOutput: false, // Disable FileObject and return URL strings
});  

export async function POST(req) {
  const data = await req.json(); // Fixed typo: req instead of request

  try {
    const output = await replicate.run(
      data?.aiModelName || "bytedance/sdxl-lightning-4step:6f7a773af6fc3e8de9d5a3c00be77c17308914bf67772726aff83496ba1e3bbe", // Default model
      {
        input: {
          prompt: (data?.inputPrompt || "") + " " + (data?.defaultPrompt || "A default prompt"),
        },
      }
    );
    console.log(output);
    return new Response(JSON.stringify({ result: Array.isArray(output) ? output[0] : output }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: "Failed to generate image" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}