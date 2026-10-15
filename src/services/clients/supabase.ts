import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Config from 'react-native-config';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = Config.PUBLIC_SUPABASE_URL;
const publishableKey = Config.PUBLIC_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !publishableKey) {
  throw new Error('Env variables error');
}

export const supabase = createClient(supabaseUrl, publishableKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});