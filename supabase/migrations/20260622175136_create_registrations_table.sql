CREATE TABLE IF NOT EXISTS registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  institution text NOT NULL,
  department text NOT NULL,
  designation text NOT NULL,
  city text NOT NULL,
  state text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "insert_registrations" ON registrations FOR INSERT
  TO anon WITH CHECK (true);

CREATE POLICY "select_own_registration" ON registrations FOR SELECT
  TO anon USING (true);
