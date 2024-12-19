import postgres from 'postgres'

const sql = postgres(process.env.DATABASE_URL);

if (process.env.NODE_ENV !== 'production') {
    // Testa a conexão com o banco ao inicializar
    (async () => {
        try {
            await sql`SELECT 1`; // Consulta simples para validar a conexão
            console.log('Conexão com o banco de dados estabelecida com sucesso!');
        } catch (error) {
            console.error('Erro ao conectar ao banco de dados:', error);
            process.exit(1); // Finaliza o processo caso haja falha na conexão
        }
    })();
}

export default sql;