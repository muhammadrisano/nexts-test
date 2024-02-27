
# Peworld Frontend
Peworld is a platform-based website for searching and recruiting freelancers or project workers. This platform allows workers to create an account and display their profiles and portfolios. Applicants can also create an account to view the list of available workers and submit applications to them.

## Features
Users can sign-up and login as a worker or recruiter. Worker can Edit their profile, add a portfolio, and add skill.
Recruiter can edit their profile and hire a worker

## Build with
Next.js, bootstrap

## Package and dependecies
```bash
"@nestjs/axios": "^3.0.1",
    "axios": "^1.6.7",
    "bootstrap": "^5.3.2",
    "next": "14.1.0",
    "next-images": "^1.8.5",
    "react": "^18",
    "react-bootstrap": "^2.10.0",
    "react-dom": "^18",
    "react-icons": "^5.0.1",
    "swr": "^2.2.4"
```
## Environment Variable
```dash
NEXT_PUBLIC_HIRE_JOB_URL=
```
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Screenshot
![login](https://github.com/ChanraSB/next-HireJob/assets/151555550/01d4dd2e-0a3c-4009-b1de-632693c6a9d3) <br>
![register](https://github.com/ChanraSB/next-HireJob/assets/151555550/71b0a580-509e-48d2-825c-b5f1bd9b9d81) <br>
![landing page](https://github.com/ChanraSB/next-HireJob/assets/151555550/469954b0-29e0-4a3a-8bbe-7ca16ec58e3b) <br>
![profile](https://github.com/ChanraSB/next-HireJob/assets/151555550/180354e5-18d9-4299-8297-bbedef0a9ef9)
[home page](https://private-user-images.githubusercontent.com/151555550/307235698-73d51cd0-1be9-4d76-97ba-6a9129a5c3cb.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDg2Njk0ODUsIm5iZiI6MTcwODY2OTE4NSwicGF0aCI6Ii8xNTE1NTU1NTAvMzA3MjM1Njk4LTczZDUxY2QwLTFiZTktNGQ3Ni05N2JhLTZhOTEyOWE1YzNjYi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMjIzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDIyM1QwNjE5NDVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01NjJlZWJkNzViNDdlNTRiMGI5YjVhYzBmNDUwMmY2N2MwM2E5MDM2OWEzOGU4MGYxZDZkNzdjYWY4MDI5MjdlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.tKxjmQoWDAb-5x7w40jUopoHqpMMHpnt7WAhVzu6uvE) <br>
[Profile page](https://private-user-images.githubusercontent.com/151555550/307235753-347e5b4c-428c-4d23-8183-9970413f6987.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDg2Njk0ODUsIm5iZiI6MTcwODY2OTE4NSwicGF0aCI6Ii8xNTE1NTU1NTAvMzA3MjM1NzUzLTM0N2U1YjRjLTQyOGMtNGQyMy04MTgzLTk5NzA0MTNmNjk4Ny5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMjIzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDIyM1QwNjE5NDVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jYTY2MTE5MzcwZjBmN2UwYzI5MDM3NWI4MGJmZmUxYzQxZDdjYjU5YzhmZmYzNzJlYTQ0MzJjMmU4ZTAyOTlmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.ghlC6YSCcefXjgsToFEhoYZb8Y-2Mj8Yu_7ExfDzvQA) <br>
[Edit profile](https://private-user-images.githubusercontent.com/151555550/307235781-9b895716-cb5d-4a59-8f32-cda2783a1e3e.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDg2Njk0ODUsIm5iZiI6MTcwODY2OTE4NSwicGF0aCI6Ii8xNTE1NTU1NTAvMzA3MjM1NzgxLTliODk1NzE2LWNiNWQtNGE1OS04ZjMyLWNkYTI3ODNhMWUzZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMjIzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDIyM1QwNjE5NDVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02MTU4ZjliNmQ5MzQ1ZjQ4ODE4MjkyYjA2YTRkNjIxYWY0MzI3YjQ3MTMyNjI2ZDEzMDNlYzU1MjNjMzgyMWIxJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.sM6SEbNiWnfKLtQSsQ1Fqthph8THLYWNjnR7Vb2Mi34) <br>
[add portfolio](https://private-user-images.githubusercontent.com/151555550/307235796-0d6c5225-0533-47b1-bef2-0dac4331c877.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDg2Njk0ODUsIm5iZiI6MTcwODY2OTE4NSwicGF0aCI6Ii8xNTE1NTU1NTAvMzA3MjM1Nzk2LTBkNmM1MjI1LTA1MzMtNDdiMS1iZWYyLTBkYWM0MzMxYzg3Ny5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMjIzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDIyM1QwNjE5NDVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hN2E0OGQ5NTUwNGY0YTIxNjNiOTdiNjFlOWQyMWNlZTg5YThjNmRkMzA3ZGQ4Y2Y3ODdlNDBjZjQzN2NlOTkzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.QnfuwtdhMRH2cyTswEfI9O0TnH0VO9imgNrilfCtNx0)
## Author
💻 [Chanra S Bakkara](https://github.com/ChanraSB)

## Related Project
⚡[Demo Peworld](https://next-hire-job.vercel.app/)⚡<br>
⚡[Frontend Peworld](https://github.com/ChanraSB/next-HireJob)⚡<br>
⚡[Backend Peworld](https://github.com/ChanraSB/fwm17-be-peword)⚡
