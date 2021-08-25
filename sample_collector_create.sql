CREATE TABLE public.users (
  "_id" serial NOT NULL,
  "first_name" varchar NOT NULL,
  "last_name" varchar NOT NULL,
  "email" varchar,
  "access_token" varchar,
  "refresh_token" varchar
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.sounds (
  "_id" serial NOT NULL,
  "name" varchar NOT NULL,
  "username" varchar NOT NULL,
  "description" varchar,
  "pack" varchar,
  "type" varchar,
  "duration" decimal,
  "bitdepth" integer,
  "bitrate" decimal,
  "sample_rate" integer,
  "file_size" integer,
  "num_downloads" integer,
  "avg_rating" decimal,
  "num_ratings" integer,
  "comment" varchar,
  CONSTRAINT "users_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.projects (
  "_id" serial NOT NULL,
  "name" varchar NOT NULL,
  "description" varchar,
  CONSTRAINT "users_pk" PRIMARY KEY("_id")
) WITH (
  OIDS=FALSE
);