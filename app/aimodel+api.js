// import Replicate from "replicate";

// // const replicate = new Replicate({
// //   auth: process.env.REPLICATE_API_KEY,
// // });
// const replicate = new Replicate({
//   auth: process.env.REPLICATE_API_KEY,
//   useFileOutput: false, // Disable FileObject and return URL strings
// });  

// export async function POST(req) {
//   const data = await req.json(); // Fixed typo: req instead of request

//   try {
//     const output = await replicate.run(
//       data?.aiModelName || "bytedance/sdxl-lightning-4step:6f7a773af6fc3e8de9d5a3c00be77c17308914bf67772726aff83496ba1e3bbe", // Default model
//       {
//         input: {
//           prompt: (data?.inputPrompt || "") + " " + (data?.defaultPrompt || "A default prompt"),
//           main_face_image:data?.userImageUrl,
//           // image: data?.userImageUrl,
//         },
//       }
//     );
//     console.log(output);
//     return new Response(JSON.stringify({ result: Array.isArray(output) ? output[0] : output }), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (e) {
//     return new Response(JSON.stringify({ error: "Failed to generate image" }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }

//Earlier both issue fixed

// import Replicate from "replicate";

// const replicate = new Replicate({
//   auth: process.env.REPLICATE_API_KEY,
//   useFileOutput: false,
// });

// export async function POST(req) {
//   const data = await req.json();
//   console.log('Received data:', data); // Debug log

//   try {
//     const input = {
//       prompt: `${data?.inputPrompt || ''} ${data?.defaultPrompt || ''}`.trim(),
//     };

//     // Only include main_face_image if userImageUrl is provided
//     if (data?.userImageUrl) {
//       input.main_face_image = data.userImageUrl;
//     }

//     const output = await replicate.run(
//       data?.aiModelName || "bytedance/sdxl-lightning-4step:6f7a773af6fc3e8de9d5a3c00be77c17308914bf67772726aff83496ba1e3bbe",
//       { input }
//     );

//     console.log('Replicate output:', output);
//     return new Response(JSON.stringify({ result: Array.isArray(output) ? output[0] : output }), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (e) {
//     console.error('Error generating image:', e);
//     return new Response(JSON.stringify({ error: "Failed to generate image", details: e.message }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }

import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_KEY,
  useFileOutput: false,
});

export async function POST(req) {
  const data = await req.json();
  console.log('Received data:', data); // Debug log

  try {
    const input = {
      prompt: `${data?.inputPrompt || ''} ${data?.defaultPrompt || ''}`.trim(),
    };

    // Determine the input field based on the model
    if (data?.userImageUrl) {
      if (data?.aiModelName === "cjwbw/rembg:fb8af171cfa1616ddcf1242c093f9c46bcada5ad4cf6f2fbe8b81b330ec5c003") {
        input.image = data.userImageUrl; // Use 'image' for rembg
      } else if (data?.aiModelName === "nightmareai/real-esrgan:f121d640bd286e1fdc67f9799164c1d5be36ff74576ee11c803ae5b665dd46aa") {
        input.image = data.userImageUrl; // Use 'image' for real-esrgan
      } else {
        input.main_face_image = data.userImageUrl; // Use 'main_face_image' for other models (e.g., pulid)
      }
    }

    // Add scale for upscale model if provided
    if (data?.aiModelName === "nightmareai/real-esrgan:f121d640bd286e1fdc67f9799164c1d5be36ff74576ee11c803ae5b665dd46aa" && data?.scale) {
      input.scale = data.scale;
    }

    console.log('Input sent to Replicate:', input);
    const output = await replicate.run(
      data?.aiModelName || "bytedance/sdxl-lightning-4step:6f7a773af6fc3e8de9d5a3c00be77c17308914bf67772726aff83496ba1e3bbe",
      { input }
    );

    console.log('Replicate output:', output);
    return new Response(JSON.stringify({ result: Array.isArray(output) ? output[0] : output }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error('Error generating image:', e);
    return new Response(JSON.stringify({ error: "Failed to generate image", details: e.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}