-- CONSULTAS BASE DE DATOS ORAS.
Use ORASV1;

-- Consulta No. 1  Generar un select que liste los usuarios registrados con el tipo de documento cedula de ciudadania (ordenar registros con order by).
Select Tipo_Doc, ID_Usuario, Primer_Nombre, Primer_Apellido, Telefono from usuario where Tipo_Doc = 2 order by Primer_Apellido asc;

-- Consulta No. 2 Generar un select que liste los usuarios registrados con el tipo de documento cedula de extrangeria (ordenar registros con order by).
Select Tipo_Doc, ID_Usuario, Primer_Nombre, Primer_Apellido, Telefono from usuario where Tipo_Doc = 3 order by Primer_Apellido asc;

-- Consulta No. 3 Generar un select que liste los usuarios registrados menores de edad (ordenar registros con order by).
Select Tipo_Doc, ID_Usuario, Primer_Nombre, Primer_Apellido, Telefono from usuario where Tipo_Doc = 1 order by Primer_Apellido asc;

-- Consulta No. 4 Generar un select que liste los usuarios registrados con pasaporte (ordenar registros con order by).
Select Tipo_Doc, ID_Usuario, Primer_Nombre, Primer_Apellido, Telefono from usuario where Tipo_Doc = 4 order by Primer_Apellido asc;

-- Consulta No. 5 Generar un select que liste la cantidad de usuarios registrados.
Select count(ID_Usuario) as Num_Usuarios from usuario;

-- Consulta No. 6 Generar un select que liste los usuarios con rol administrador con todos los campos.
Select u.ID_Usuario, u.Primer_Nombre, u.Segundo_Nombre, u.Primer_Apellido, u.Segundo_Apellido, u.Email, u.Telefono, a.ID_TipDoc_Administrativo as TipDoc
from Usuario_Administrativo a inner join usuario u on a.ID_Administrativo = u.ID_Usuario;

-- Consulta No. 7 Generar un select que liste los instructores con con especialidad en electricidad.
Select u.ID_Usuario, u.Primer_Nombre, u.Segundo_Nombre, u.Primer_Apellido, u.Segundo_Apellido, u.Email, u.Telefono, i.ID_TipDoc_Instructor as TipDoc, i.ID_Especialidad as Especialidad
from Usuario_Instructor i inner join usuario u on i.ID_Instructor = u.ID_Usuario where i.ID_Especialidad = 1;

-- Consulta No. 8 Generar un select que liste el programa y su respectiva ficha. Ordénelos por número de ficha de forma descendiente. 
Select programa.Nombre as Programa, ficha.ID_Ficha as NumFicha , ficha.Num_Grupo as Grupo
from ficha join programa on programa.ID_Programa = ficha.ID_Programa order by ficha.ID_Ficha desc ;

-- Consulta No. 9 Generar un select que liste los aprendices asignados a la ficha número 2020121 cuyo primer nombre empiece por la letra A.
Select asignacionFicha.ID_Ficha As Ficha, asignacionFicha.ID_Usuario As Usuario, usuario.Rol As Rol, usuario.Primer_Nombre As Nombre 
from usuario, asignacionFicha where usuario.ID_Usuario = asignacionFicha.ID_Usuario and asignacionFicha.ID_Ficha = 2020121 and usuario.Primer_Nombre LIKE 'A%'

-- Consulta No. 10 Generar un select que liste las fichas registradas y su respectiva jornada.
Select f.ID_Ficha as Ficha, j.Descripcion as Jornada from ficha f left join jornada j on j.ID_Jornada = f.Jornada;

-- Consulta No. 11 Generar un select que liste las titulaciones y su nivel de formacion. Ordenelos por nivel de formación.
Select p.Nombre, n.Descripcion from nivelformacion n right join programa p on n.ID_Formacion = p.Nivel_Formacion order by n.ID_Formacion asc;

-- Consulta No. 12 Generar un select que liste la información de los usuarios que se encuentran en estado de asistencia 'Presente'.
Select u.Primer_Apellido, u.Segundo_Apellido, u.Primer_Nombre, u.Segundo_Nombre, u.Email, u.Telefono, a.FechaRegistro as Fecha, a.Estado
from registroasistencia a join usuario u on a.ID_UsuarioReg = u.ID_Usuario where a.Estado = 'Presente';

-- Consulta No. 13 Generar un select que liste la información de los usuarios que se encuentran en estado de asistencia 'Inasistencia'.
Select u.Primer_Apellido, u.Segundo_Apellido, u.Primer_Nombre, u.Segundo_Nombre, u.Email, u.Telefono, a.FechaRegistro as Fecha, a.Estado
from registroasistencia a left join usuario u on a.ID_UsuarioReg = u.ID_Usuario where a.Estado = 'Inasistencia';

-- Consulta No. 14 Generar un select que liste la fecha, ficha, ID Usuario, nombre y apellido de los usuarios que asistieron el dia '2020-03-30'.
Update RegistroAsistencia set FechaRegistro = '2020-03-30' where ID_Registro = '1192';
Update RegistroAsistencia set FechaRegistro = '2020-03-30' where ID_Registro = '2539';
Update RegistroAsistencia set FechaRegistro = '2020-03-30' where ID_Registro = '6699';
Update RegistroAsistencia set FechaRegistro = '2020-03-30' where ID_Registro = '1326';
Update RegistroAsistencia set FechaRegistro = '2020-03-30' where ID_Registro = '6448';
Update RegistroAsistencia set FechaRegistro = '2020-03-30' where ID_Registro = '6364';
Select a.FechaRegistro as Fecha, a.Ficha, u.ID_Usuario
from registroasistencia a join usuario u on a.ID_UsuarioReg = u.ID_Usuario where a.Estado = 'Presente' and a.FechaRegistro = '2020-03-30';

-- Consulta No. 15 Generar un select que liste los datos del acudiente de cada aprendiz.
Select acu.ID_Acudiente, a.ID_Aprendiz, u.Primer_Nombre, u.Primer_Apellido, u.Telefono, u.Email
from usuario_aprendiz a join usuario_acudiente acu on acu.Aprendiz = a.ID_Aprendiz join usuario u on u.ID_Usuario = acu.ID_Acudiente;

-- Consulta No. 16 Generar un select que liste los datos de los acudiente de cada aprendiz. Cuyo primer apellido empiece por letras diferentes a S, ordene los registros según su ID.
Select acu.ID_Acudiente, a.ID_Aprendiz, u.Primer_Nombre, u.Primer_Apellido, u.Telefono, u.Email
from usuario_aprendiz a join usuario_acudiente acu on acu.Aprendiz = a.ID_Aprendiz join usuario u on u.ID_Usuario = acu.ID_Acudiente where u.Primer_Apellido  NOT LIKE 'S%' order by  u.ID_Usuario asc;

-- Consulta No. 17 Generar un select para ctualizar la novedad de inasistencia del usuario 31 por " Presenta excusa médica."
Select *from registroasistencia where ID_UsuarioReg = 31;
Update registroasistencia set Novedad = 'Presenta excusa medica.' where ID_Registro = 8706;

-- Consulta No. 18 Generar un select para eliminar el registro de asistencia con ID No. 5503.
Select *from registroasistencia where ID_Registro = 5503;
Delete from registroasistencia where ID_Registro = 5503;

-- Consulta No. 19 Generar un select que cuente el numero de registros de asistencia en estado 'Presente'. 
Select count(ID_Registro) as Num_Registros from registroasistencia where Estado = 'Presente';

-- Consulta No. 20 Generar un select que liste los instructores con con especialidad en electronica ordenelos por apellido.
Select u.ID_Usuario, u.Primer_Nombre, u.Segundo_Nombre, u.Primer_Apellido, u.Segundo_Apellido, u.Email, u.Telefono, i.ID_TipDoc_Instructor as TipDoc, i.ID_Especialidad as Especialidad
from Usuario_Instructor i left join usuario u on i.ID_Instructor = u.ID_Usuario where i.ID_Especialidad = 2 order by u.Primer_Apellido asc;

-- Consulta de evaluación.
-- Generar un select que liste las fichas asignadas al instructor con ID No. 21
select us.ID_Instructor, u.Primer_Nombre, u.Primer_Apellido, f.ID_Asignacion, f.ID_Ficha, p.Nombre
from usuario_instructor us join usuario u on us.ID_Instructor = u.ID_Usuario join asignacionFicha f on f.ID_Usuario = u.ID_Usuario join ficha fi on f.ID_Ficha = fi.ID_Ficha join  programa p on fi.ID_Programa = p.ID_programa where us.ID_Instructor = 21;
