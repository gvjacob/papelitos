import wretch from 'wretch';

export default wretch().url(process.env.NEXT_PUBLIC_BASE_URL).url('/api');
