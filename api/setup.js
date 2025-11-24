const { sql } = require('@vercel/postgres');

module.exports = async function handler(request, response) {
  try {
    await sql`CREATE TABLE IF NOT EXISTS registrations (
      id SERIAL PRIMARY KEY,
      nome VARCHAR(255) NOT NULL,
      categoria VARCHAR(255) NOT NULL,
      date VARCHAR(255) NOT NULL
    );`;
    return response.status(200).json({ message: 'Table created successfully' });
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
}
