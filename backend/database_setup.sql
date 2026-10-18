-- Dokumentownik — schemat bazy danych MySQL
-- Wymagania: MySQL 8.0+
-- Tabele: users, categories, documents
-- Identyfikatory są UUID przechowywanymi jako CHAR(36).

CREATE DATABASE IF NOT EXISTS dokumentownik
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

USE dokumentownik;

-- =========================================
-- Tabela: users
-- =========================================
CREATE TABLE users (
    id CHAR(36) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,

    PRIMARY KEY (id),
    UNIQUE KEY uq_users_email (email)
) ENGINE=InnoDB;

-- =========================================
-- Tabela: categories
-- =========================================
CREATE TABLE categories (
    id CHAR(36) NOT NULL,
    user_id CHAR(36) NOT NULL,
    name VARCHAR(100) NOT NULL,

    PRIMARY KEY (id),
    UNIQUE KEY uq_categories_user_name (user_id, name),
    KEY idx_categories_user_id (user_id),

    CONSTRAINT fk_categories_user
        FOREIGN KEY (user_id)
        REFERENCES users (id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
) ENGINE=InnoDB;

-- =========================================
-- Tabela: documents
-- =========================================
CREATE TABLE documents (
    id CHAR(36) NOT NULL,
    user_id CHAR(36) NOT NULL,
    category_id CHAR(36) NULL,

    title VARCHAR(255) NOT NULL,
    description TEXT NULL,
    issuer VARCHAR(255) NULL,
    issue_date DATE NULL,
    expiration_date DATE NULL,

    file_name VARCHAR(255) NOT NULL,
    file_type VARCHAR(100) NOT NULL,

    is_archived BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY (id),
    KEY idx_documents_user_id (user_id),
    KEY idx_documents_category_id (category_id),
    KEY idx_documents_expiration_date (expiration_date),
    KEY idx_documents_created_at (created_at),

    CONSTRAINT fk_documents_user
        FOREIGN KEY (user_id)
        REFERENCES users (id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    CONSTRAINT fk_documents_category
        FOREIGN KEY (category_id)
        REFERENCES categories (id)
        ON DELETE SET NULL
        ON UPDATE CASCADE
) ENGINE=InnoDB;
