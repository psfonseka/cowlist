USE cows;

DROP TABLE cows;

CREATE TABLE cows (
    ID int NOT NULL AUTO_INCREMENT,
    Name varchar(50),
    Description varchar(255),
    PRIMARY KEY(ID)
);

INSERT INTO cows VALUES (NULL, 'Bob', 'He is a good boy!');