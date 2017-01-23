CREATE TABLE recipe (
  id INT(11) AUTO_INCREMENT NOT NULL,
  name VARCHAR(255) NOT NULL,
  origin VARCHAR(55),
  quantity INT(11),
  quantity_type VARCHAR(55),

  PRIMARY_KEY (id)
);
