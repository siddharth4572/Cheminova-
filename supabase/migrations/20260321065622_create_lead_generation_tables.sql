/*
  # Lead Generation System for Cheminnova Life Sciences

  ## Overview
  This migration creates tables to capture and manage leads from the pharmaceutical website.
  All tables include RLS policies to ensure data security.

  ## New Tables Created

  ### 1. `general_inquiries`
  Captures general contact form submissions
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text) - Contact person name
  - `email` (text) - Contact email
  - `phone` (text) - Contact phone number
  - `company_name` (text, optional) - Company name if applicable
  - `message` (text) - Inquiry message
  - `created_at` (timestamptz) - Timestamp of submission

  ### 2. `distributor_applications`
  Captures distributor partnership applications
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text) - Applicant name
  - `email` (text) - Contact email
  - `phone` (text) - Contact phone number
  - `company_name` (text) - Company name
  - `city` (text) - City location
  - `country` (text) - Country location
  - `product_interest` (text) - Products interested in
  - `message` (text, optional) - Additional message
  - `created_at` (timestamptz) - Timestamp of application

  ### 3. `product_inquiries`
  Captures specific product inquiry submissions
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text) - Contact person name
  - `email` (text) - Contact email
  - `phone` (text) - Contact phone number
  - `company_name` (text, optional) - Company name if applicable
  - `product_name` (text) - Product inquired about
  - `quantity` (text, optional) - Quantity interested in
  - `message` (text, optional) - Additional message
  - `created_at` (timestamptz) - Timestamp of inquiry

  ## Security
  - RLS enabled on all tables
  - Tables are write-only from public access (insert only)
  - No read access for public users (admin access only)
*/

-- Create general_inquiries table
CREATE TABLE IF NOT EXISTS general_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  company_name text DEFAULT '',
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create distributor_applications table
CREATE TABLE IF NOT EXISTS distributor_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  company_name text NOT NULL,
  city text NOT NULL,
  country text NOT NULL,
  product_interest text NOT NULL,
  message text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

-- Create product_inquiries table
CREATE TABLE IF NOT EXISTS product_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  company_name text DEFAULT '',
  product_name text NOT NULL,
  quantity text DEFAULT '',
  message text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE general_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE distributor_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_inquiries ENABLE ROW LEVEL SECURITY;

-- Create policies for general_inquiries (insert only for public)
CREATE POLICY "Allow public to insert general inquiries"
  ON general_inquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policies for distributor_applications (insert only for public)
CREATE POLICY "Allow public to insert distributor applications"
  ON distributor_applications
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policies for product_inquiries (insert only for public)
CREATE POLICY "Allow public to insert product inquiries"
  ON product_inquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);