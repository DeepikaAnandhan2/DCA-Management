# DCA Management Platform
AI-powered Digital Case & Credit Management System
#
Backend
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload

Frontend
cd frontend
npm install
npm run dev