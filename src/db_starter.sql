INSERT INTO `character` (created_at, modified, version, id, name, description, resource_uri, urls, thumbnail) 
	VALUES 
	(sysdate(), sysdate(), 1, 1, "Hulk", "Homem verde, grande e forte", "resource_uri", "www.sitedohulk.com", "www.fotodohulk.com"),
	(sysdate(), sysdate(), 1, 2, "Thor", "Deus louro, gordo e egoísta", "resource_uri", "www.sitedothor.com", "www.fotodothor.com"),
	(sysdate(), sysdate(), 1, 3, "Loki", "Deus moreno, trapaceiro e indígno", "resource_uri", "www.sitedoloki.com", "www.fotodoloki.com"),
	(sysdate(), sysdate(), 1, 4, "Snoopy", "Raça Yorkshire, idade 8 meses, muito fofinho", "resource_uri", "www.sitedoisnupi.com", "www.fotodoisnupi.com"),
	(sysdate(), sysdate(), 1, 5, "Ironman", "Homem rico, gênio e arrogante", "resource_uri", "www.sitedoironman.com", "www.fotodoironman.com"),
	(sysdate(), sysdate(), 1, 6, "Thanos", "Homem roxo, grande e forte", "resource_uri", "www.sitedothanos.com", "www.fotodothanos.com"),
	(sysdate(), sysdate(), 1, 7, "Dr Strange", "Homem louco, cheio de soltar umas faíscas e tal", "resource_uri", "www.sitedostrange.com", "www.fotodostrange.com")
;

INSERT INTO `series` (created_at, modified, version, id, name, description, launch_date, num_of_episodes, characterId)
	VALUES
	(sysdate(), sysdate(), 1, 1, "Aventura do Hulk numero 1", "Aventuras de alto perigo numero 1", STR_TO_DATE('1979-10-01 11:30','%Y-%m-%d %h:%i'), 50, 1 ),
	(sysdate(), sysdate(), 1, 2, "Aventura do Hulk numero 2", "Aventuras de alto perigo numero 2", STR_TO_DATE('1979-10-01 11:30','%Y-%m-%d %h:%i'), 50, 1 ),
	(sysdate(), sysdate(), 1, 3, "Aventura do Snoopy numero 1", "Aventuras de alto perigo numero 3", STR_TO_DATE('1979-10-01 11:30','%Y-%m-%d %h:%i'), 50, 4 ),
	(sysdate(), sysdate(), 1, 4, "Aventura do Snoopy numero 2", "Aventuras de alto perigo numero 4", STR_TO_DATE('1979-10-01 11:30','%Y-%m-%d %h:%i'), 50, 4 )
;

INSERT INTO `comic` (created_at, modified, version, id, name, description, launch_date, num_of_pages, characterId)
	VALUES
	(sysdate(), sysdate(), 1, 1, "HQ do Hulk numero 1", "Aventuras de alto perigo numero 1", STR_TO_DATE('1979-10-01 11:30','%Y-%m-%d %h:%i'), 50, 1 ),
	(sysdate(), sysdate(), 1, 2, "HQ do Hulk numero 2", "Aventuras de alto perigo numero 2", STR_TO_DATE('1979-10-01 11:30','%Y-%m-%d %h:%i'), 50, 1 ),
	(sysdate(), sysdate(), 1, 3, "HQ do Snoopy numero 1", "Aventuras de alto perigo numero 3", STR_TO_DATE('1979-10-01 11:30','%Y-%m-%d %h:%i'), 50, 4 ),
	(sysdate(), sysdate(), 1, 4, "HQ do Snoopy numero 2", "Aventuras de alto perigo numero 4", STR_TO_DATE('1979-10-01 11:30','%Y-%m-%d %h:%i'), 50, 4 )
;

INSERT INTO `event` (created_at, modified, version, id, name, description, event_date, characterId)
	VALUES
	(sysdate(), sysdate(), 1, 1, "Evento do Hulk numero 1", "Aventuras de alto perigo numero 1", STR_TO_DATE('1979-10-01 11:30','%Y-%m-%d %h:%i'), 1 ),	
	(sysdate(), sysdate(), 1, 2, "Evento do Hulk numero 2", "Aventuras de alto perigo numero 2", STR_TO_DATE('1979-10-01 11:30','%Y-%m-%d %h:%i'), 1 ),	
	(sysdate(), sysdate(), 1, 3, "Evento do Snoopy numero 1", "Aventuras de alto perigo numero 3", STR_TO_DATE('1979-10-01 11:30','%Y-%m-%d %h:%i'), 4 ),	
	(sysdate(), sysdate(), 1, 4, "Evento do Snoopy numero 2", "Aventuras de alto perigo numero 4", STR_TO_DATE('1979-10-01 11:30','%Y-%m-%d %h:%i'), 4 )
;

INSERT INTO `story` (created_at, modified, version, id, name, description, launch_date, characterId)
	VALUES
	(sysdate(), sysdate(), 1, 1, "História do Hulk numero 1", "Aventuras de alto perigo numero 1", STR_TO_DATE('1979-10-01 11:30','%Y-%m-%d %h:%i'),  1 ),
	(sysdate(), sysdate(), 1, 2, "História do Hulk numero 2", "Aventuras de alto perigo numero 2", STR_TO_DATE('1979-10-01 11:30','%Y-%m-%d %h:%i'),  1 ),
	(sysdate(), sysdate(), 1, 3, "História do Snoopy numero 1", "Aventuras de alto perigo numero 3", STR_TO_DATE('1979-10-01 11:30','%Y-%m-%d %h:%i'),  4 ),
	(sysdate(), sysdate(), 1, 4, "História do Snoopy numero 2", "Aventuras de alto perigo numero 4", STR_TO_DATE('1979-10-01 11:30','%Y-%m-%d %h:%i'),  4 )
;