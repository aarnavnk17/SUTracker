-- Vertical head logins. Each row needs a matching Supabase auth user first
-- (Dashboard -> Authentication -> Add user); the id below is that user's uuid.
-- Safe to re-run: existing rows are updated in place rather than duplicated.

insert into profiles (id, display_name, role, vertical_id)
values
  (
    '03d828ec-842a-464c-8d13-5c9d533dbb37',
    'Gokul',
    'vertical_head',
    (select id from verticals where name = 'Design')
  )
on conflict (id) do update
  set display_name = excluded.display_name,
      role = excluded.role,
      vertical_id = excluded.vertical_id;
