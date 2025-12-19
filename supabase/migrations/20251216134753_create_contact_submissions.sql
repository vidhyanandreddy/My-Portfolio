/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Name of the person submitting the form
      - `email` (text) - Email address of the submitter
      - `message` (text) - Message content from the form
      - `created_at` (timestamptz) - Timestamp when the submission was created
      - `read` (boolean) - Flag to track if the message has been read

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for anonymous users to insert their contact submissions
    - No read policies (only the owner can view submissions through another interface)

  3. Notes
    - This table stores contact form submissions from the portfolio website
    - Anonymous users can submit messages without authentication
    - The owner can view and manage submissions separately
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  read boolean DEFAULT false
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);