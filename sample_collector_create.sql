DROP TABLE public.samples;


SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;


-- CREATE TABLE public.users (
--   "_id" serial NOT NULL,
--   "first_name" varchar NOT NULL,
--   "last_name" varchar NOT NULL,
--   "email" varchar,
--   "access_token" varchar,
--   "refresh_token" varchar
-- ) WITH (
--   OIDS=FALSE
-- );

CREATE TABLE public.samples (
  "_id" serial NOT NULL,
  "sample_id" varchar NOT NULL,
  "name" varchar NOT NULL,
  "url" varchar NOT NULL,
  "username" varchar NOT NULL,
  "download_url" varchar,
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
  "geotag" varchar,
  "previews" varchar
  -- CONSTRAINT "users_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

-- CREATE TABLE public.projects (
--   "_id" serial NOT NULL,
--   "name" varchar NOT NULL,
--   "description" varchar,
--   CONSTRAINT "users_pk" PRIMARY KEY("_id")
-- ) WITH (
--   OIDS=FALSE
-- );