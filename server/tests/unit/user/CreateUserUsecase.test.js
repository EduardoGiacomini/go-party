const { CreateUserUsecase } = require("../../../src/core/usecase/user/CreateUserUsecase");
const _ = require("lodash");

describe("Caso de uso: criar usuário", () => {
    test("Deve possuir o método execute", () => {
        const usecase = new CreateUserUsecase();
        expect(typeof usecase.execute).toBe("function")
    });

    test("Deve criar o usuário e retorná-lo com um ID", (done) => {
        const userToSave = {name: "Naruto Uzumaki", email: "naruto@gmail.com", telefone: "67999999999"};
        const expectedUser = {id: 1, name: "Naruto Uzumaki", email: "naruto@gmail.com", telefone: "67999999999"};

        const userRepositoryMock = {
            create(user) {
                const createdUser = _.clone(user);
                createdUser.id = 1;
                return createdUser;
            },
            findUserByEmail(email) {
                return null;
            }
        }

        const responderMock = {
            created(user) {
                expect(user).toEqual(expectedUser);
                done();
            },
            error(error) {
                console.log(error);
                done()
            }
        }

        const usecase = new CreateUserUsecase(userRepositoryMock);
        usecase.execute(userToSave, responderMock);
    });
});
