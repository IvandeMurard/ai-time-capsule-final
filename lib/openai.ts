// Appel OpenAI API

export async function stylizeLetter(userInput: string, style: string) {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `You are a time-traveling poet. Rewrite the user's letter in a ${style} tone, keeping its message.`,
        },
        { role: "user", content: userInput },
      ],
    }),
  });

  const data = await response.json();
  return data.choices[0].message.content;
}