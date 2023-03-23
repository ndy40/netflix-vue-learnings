const token = process.env['API_TOKEN'];

const i_params = process.env['i_params'];

const URL = `http://www.omdbapi.com?i${i_params}&apiKey=${token}`;

