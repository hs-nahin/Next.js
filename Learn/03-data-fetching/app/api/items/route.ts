// GET API route for handling GET and POST requests.
export async function GET() {
  const data = {
    message: "Hello from the API",
    error: false,
    status: 200,
  };

  return Response.json({ data });
}

// POST request handler
export async function POST(req: { json: () => never }) {
  const postedData = await req.json();

  return Response.json({ postedData });
}
