'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("parties_log", {
            id: {
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING(100)
            },
            description: {
                type: Sequelize.STRING(255)
            },
            date_time: {
                type: Sequelize.DATE
            },
            user_id: {
                type: Sequelize.INTEGER
            },
            operation_type: {
                type: Sequelize.STRING(6),
                allowNull: false,
                validate: {
                    isUppercase: true,
                    isIn: [['UPDATE', 'DELETE']],
                }
            },
            created_at: {
                type: Sequelize.DATE
            },
            updated_at: {
                type: Sequelize.DATE
            },
            occurred_at: {
                type: Sequelize.DATE
            }
        });

        await queryInterface.sequelize.query(`
            CREATE OR REPLACE FUNCTION savePartyLog() RETURNS TRIGGER AS $$
                BEGIN
                    INSERT INTO parties_log
                        (id, name, description, date_time, user_id, operation_type, created_at, updated_at, occurred_at)
                        VALUES (OLD.id, OLD.name, OLD.description, OLD.date_time, OLD.user_id, TG_OP, OLD.created_at,
                            OLD.updated_at, CURRENT_TIMESTAMP);
                    RAISE NOTICE 'Saving operation on parties log table.';
                    RETURN NEW;
                END
            $$ LANGUAGE PLPGSQL;
        `);

        await queryInterface.sequelize.query(`
            CREATE TRIGGER partyLog
                AFTER UPDATE OR DELETE ON parties
                FOR EACH ROW EXECUTE PROCEDURE savePartyLog();
        `);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.sequelize.query("DROP TRIGGER partyLog ON parties;");
        await queryInterface.sequelize.query("DROP FUNCTION savePartyLog;")
        await queryInterface.dropTable("parties_log");
    }
};
