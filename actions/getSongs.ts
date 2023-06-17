import { Song } from '@/types';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

async function getSongs(): Promise<Song[]> {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  const { data, error } = await await supabase.from('songs').select('*').order('created_at', { ascending: false });

  if (error) {
    console.log(error.message);
  }

  return (data as any) || [];
}
export default getSongs;
