Create database ORASV1;
Use ORASV1;

Create table Rol (
ID_Rol int not null,
primary key (ID_Rol),
Descripción varchar (35) not null
);

Create table Tipo_Documento(
ID_TipDoc int not null,
primary key (ID_TipDoc),
Siglas varchar (5) not null,
Descripción varchar (35) not null
);

Create table Usuario (
Tipo_Doc int not null,
ID_Usuario varchar (20) not null,
Primer_Nombre varchar (60) not null,
Segundo_Nombre varchar (60),
Primer_Apellido varchar (60) not null,
Segundo_Apellido varchar (60),
Email varchar (60) not null, 
Telefono varchar (60), 
Contraseña blob not null,
Foto blob,
Rol int not null
);
Alter table Usuario add constraint foreign key (Tipo_Doc) references Tipo_Documento (ID_TipDoc) on update cascade;
Alter table Usuario add constraint foreign key (Rol) references Rol (ID_Rol) on update cascade;
Alter table Usuario add primary key (ID_Usuario,Tipo_Doc);

Create table Usuario_Aprendiz (
ID_Aprendiz varchar (20) not null,
ID_TipDoc_Aprendiz int not null
);
Alter table Usuario_Aprendiz add constraint foreign key (ID_Aprendiz) references Usuario (ID_Usuario) on update cascade;
Alter table Usuario_Aprendiz add constraint primary key (ID_Aprendiz);

Create table Usuario_Acudiente (
ID_Acudiente varchar (20) not null,
ID_TipDoc_Acudiente int not null,
Aprendiz varchar (20) not null
);
Alter table Usuario_Acudiente add constraint foreign key (ID_Acudiente) references Usuario (ID_Usuario) on update cascade;
Alter table Usuario_Acudiente add constraint foreign key (ID_TipDoc_Acudiente) references tipo_documento (ID_TipDoc) on update cascade;
Alter table Usuario_Acudiente add constraint foreign key (Aprendiz) references Usuario_Aprendiz (ID_Aprendiz) on update cascade;
Alter table Usuario_Acudiente add constraint primary key (ID_Acudiente);

Create table Usuario_Administrativo(
ID_Administrativo varchar (20) not null,
ID_TipDoc_Administrativo int not null
);
Alter table Usuario_Administrativo add constraint foreign key (ID_Administrativo) references Usuario (ID_Usuario) on update cascade;
Alter table Usuario_Administrativo add constraint primary key (ID_Administrativo);

Create table Especialidad(
ID_Especialidad int not null,
Descripción varchar (60) not null
);
Alter table Especialidad add constraint primary key (ID_Especialidad);

Create table Usuario_Instructor(
ID_Instructor varchar (20) not null,
ID_TipDoc_Instructor int not null,
ID_Especialidad int not null
);
Alter table Usuario_Instructor add constraint foreign key (ID_Instructor) references Usuario (ID_Usuario) on update cascade;
Alter table Usuario_Instructor add constraint foreign key (ID_Especialidad) references Especialidad (ID_Especialidad) on update cascade;
Alter table Usuario_Instructor add primary key (ID_Instructor);

Create table Sede(
ID_Sede int not null,
Nombre varchar (60) not null,
Ubicación varchar (60) not null
);
Alter table Sede add constraint primary key (ID_Sede);

Create table NivelFormacion(
ID_Formacion int not null,
Descripcion varchar (60) not null
);
Alter table NivelFormacion add constraint primary key (ID_Formacion);

Create table Programa (
ID_Programa int not null,
Nombre text not null,
Especialidad_Programa int not null, 
Sede int not null,
Nivel_Formacion int not null
);
Alter table Programa add constraint foreign key (Especialidad_Programa) references Especialidad (ID_Especialidad) on update cascade;
Alter table Programa add constraint foreign key (Sede) references Sede (ID_Sede) on update cascade;
Alter table Programa add constraint foreign key (Nivel_Formacion) references NivelFormacion (ID_Formacion) on update cascade;
Alter table Programa add primary key (ID_Programa);

Create table Jornada(
ID_Jornada int not null,
Descripcion varchar (30) not null, 
Hora_Inicio time,
Hora_Final time
);
Alter table Jornada add primary key (ID_Jornada);

Create table Ficha (
ID_Ficha int not null,
Num_Grupo int,
ID_Programa int not null, 
Trimestre int not null,
Jornada int not null
);
Alter table Ficha add foreign key (ID_Programa) references programa (ID_Programa) on update cascade;
Alter table Ficha add foreign key (Jornada) references Jornada (ID_Jornada) on update cascade;
Alter table Ficha add primary Key (ID_Ficha);

Create table asignacionFicha (
ID_Asignacion int not null, 
ID_Ficha int not null, 
ID_Usuario varchar (20) not null
);
Alter table asignacionFicha add foreign key (ID_Ficha) references Ficha (ID_Ficha) on update cascade;
Alter table asignacionFicha add foreign key (ID_Usuario) references Usuario (ID_Usuario) on update cascade;
Alter table asignacionFicha add primary key (ID_Asignacion);

Create table RegistroAsistencia(
ID_Registro int not null,
FechaRegistro date not null,
ID_UsuarioReg varchar (20) not null,
RolUsuario int not null,
Ficha int not null,
Estado varchar (60) not null,
Novedad text
);
Alter table RegistroAsistencia add foreign key (ID_UsuarioReg) references Usuario (ID_Usuario) on update cascade;
Alter table RegistroAsistencia add foreign key (Ficha) references Ficha (ID_Ficha) on update cascade;
Alter table RegistroAsistencia add foreign key (RolUsuario) references Rol (ID_Rol) on update cascade;
Alter table RegistroAsistencia add primary key (ID_Registro,RolUsuario);
