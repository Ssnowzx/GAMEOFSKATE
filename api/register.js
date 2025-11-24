const { sql } = require('@vercel/postgres');

module.exports = async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method Not Allowed' });
  }

  const { nome, categoria } = request.body;

  if (!nome || !categoria) {
    return response.status(400).json({ error: 'Nome e categoria são obrigatórios' });
  }

  try {
    await sql`INSERT INTO registrations (nome, categoria, date) VALUES (${nome}, ${categoria}, ${new Date().toISOString()});`;
    return response.status(200).json({ success: true });
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
}
