CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS tasks (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    status VARCHAR(20) DEFAULT 'pending', -- Valores possíveis: 'pending', 'in-progress', 'done'
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (name, email, created_at) VALUES
('João Silva', 'joao.silva@email.com', NOW()),
('Maria Oliveira', 'maria.oliveira@email.com', NOW()),
('Carlos Santos', 'carlos.santos@email.com', NOW());

INSERT INTO tasks (title, description, status, user_id, created_at) VALUES
('Comprar mantimentos', 'Ir ao mercado comprar pão, leite e ovos', 'Pending', 1, NOW()),
('Enviar relatório', 'Enviar relatório mensal para o gestor', 'Done', 2, NOW()),
('Marcar reunião', 'Agendar reunião com a equipe de marketing', 'Pending', 3, NOW()),
('Planejar viagem', 'Reservar hotel e comprar passagens para as férias', 'Pending', 1, NOW()),
('Atualizar site', 'Revisar conteúdo do site e corrigir bugs', 'In Progress', 2, NOW());
