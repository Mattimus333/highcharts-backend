-- Up
CREATE TABLE totals(
    id INTEGER PRIMARY KEY,
    bond INTEGER NOT NULL,
    equities INTEGER NOT NULL,
    fx INTEGER NOT NULL,
    fxoptions INTEGER NOT NULL,
    swaps INTEGER NOT NULL
);
INSERT INTO totals(id, bond, equities, fx, fxoptions, swaps) VALUES (
  1, 5606300, 401030, 15266300, 2147600, 46830
);
-- Down
DROP TABLE totals;
