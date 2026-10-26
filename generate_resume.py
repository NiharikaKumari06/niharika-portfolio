import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch

def create_resume():
    os.makedirs('public', exist_ok=True)
    os.makedirs('src/assets', exist_ok=True)
    
    pdf_paths = ['public/resume.pdf', 'src/assets/resume.pdf']
    
    for pdf_path in pdf_paths:
        doc = SimpleDocTemplate(
            pdf_path,
            pagesize=letter,
            rightMargin=36,
            leftMargin=36,
            topMargin=36,
            bottomMargin=36
        )
        
        styles = getSampleStyleSheet()
        
        # Colors
        primary_color = colors.HexColor('#1E3A8A')    # Deep Navy
        secondary_color = colors.HexColor('#2563EB')  # Royal Blue
        dark_text = colors.HexColor('#1F2937')        # Charcoal Dark
        gray_text = colors.HexColor('#4B5563')        # Medium Gray
        line_color = colors.HexColor('#CBD5E1')       # Slate 300
        
        # Styles
        name_style = ParagraphStyle(
            'Name',
            fontName='Helvetica-Bold',
            fontSize=20,
            leading=24,
            textColor=primary_color
        )
        
        title_style = ParagraphStyle(
            'Title',
            fontName='Helvetica-Bold',
            fontSize=11,
            leading=14,
            textColor=secondary_color
        )
        
        contact_style = ParagraphStyle(
            'Contact',
            fontName='Helvetica',
            fontSize=9,
            leading=12,
            textColor=gray_text
        )
        
        section_heading = ParagraphStyle(
            'SectionHeading',
            fontName='Helvetica-Bold',
            fontSize=11,
            leading=14,
            textColor=primary_color,
            spaceBefore=8,
            spaceAfter=3
        )
        
        job_title_style = ParagraphStyle(
            'JobTitle',
            fontName='Helvetica-Bold',
            fontSize=10,
            leading=13,
            textColor=dark_text
        )
        
        meta_style = ParagraphStyle(
            'Meta',
            fontName='Helvetica-Oblique',
            fontSize=9,
            leading=12,
            textColor=gray_text,
            alignment=2 # Right aligned
        )
        
        body_style = ParagraphStyle(
            'Body',
            fontName='Helvetica',
            fontSize=8.5,
            leading=11.5,
            textColor=dark_text
        )
        
        bullet_style = ParagraphStyle(
            'Bullet',
            fontName='Helvetica',
            fontSize=8.5,
            leading=11.5,
            textColor=dark_text,
            leftIndent=12,
            firstLineIndent=-8
        )
        
        story = []
        
        # Header (Name & Contact)
        header_table_data = [
            [
                Paragraph("NIHARIKA KUMARI", name_style),
                Paragraph("Faridabad, Haryana, India<br/>Email: niharika.kumari@example.com<br/>LinkedIn: linkedin.com/in/niharika-kumari", contact_style)
            ],
            [
                Paragraph("Business Analyst | Data Analyst | Python Developer", title_style),
                Paragraph("Portfolio: niharika-portfolio-theta.vercel.app", contact_style)
            ]
        ]
        
        header_table = Table(header_table_data, colWidths=[330, 210])
        header_table.setStyle(TableStyle([
            ('VALIGN', (0,0), (-1,-1), 'TOP'),
            ('ALIGN', (1,0), (1,-1), 'RIGHT'),
            ('BOTTOMPADDING', (0,0), (-1,-1), 2),
            ('TOPPADDING', (0,0), (-1,-1), 0),
        ]))
        story.append(header_table)
        story.append(Spacer(1, 4))
        story.append(HRFlowable(width="100%", thickness=1.5, color=secondary_color, spaceBefore=4, spaceAfter=6))
        
        # Professional Summary
        story.append(Paragraph("PROFESSIONAL SUMMARY", section_heading))
        story.append(Paragraph(
            "Computer Science Engineering professional with specialized experience in Business Analysis, Data Analytics, ETL Pipeline Engineering, and Python backend systems. Proven expertise in GeM tender compliance, complex bid management, relational data modeling (PostgreSQL/SQLAlchemy), and developing centralized CRM & Sales Pipeline workflows. Adept at bridging technical systems with business objectives to optimize operational efficiency and analytical visibility.",
            body_style
        ))
        story.append(Spacer(1, 4))
        story.append(HRFlowable(width="100%", thickness=0.5, color=line_color, spaceBefore=4, spaceAfter=6))
        
        # Technical Core Matrix (Strictly NO React, NO Oracle APEX, NO Power BI)
        story.append(Paragraph("TECHNICAL SKILLS", section_heading))
        skills_text = (
            "<b>Languages & Backend:</b> Python, SQL, JavaScript, HTML5, CSS3, Flask, FastAPI, SQLAlchemy ORM, REST APIs<br/>"
            "<b>Data Analytics & Engineering:</b> ETL Pipeline Design, Data Normalization, Data Sanitization, Pandas, NumPy, Relational Data Modeling<br/>"
            "<b>Databases & Systems:</b> PostgreSQL, MySQL, Relational Schema Architecture, Database Indexing & Optimization<br/>"
            "<b>Business & Analytical Competencies:</b> GeM Tender Analysis, Technical Compliance Verification, Requirements Gathering, Process Flow Modeling<br/>"
            "<b>Developer Tools:</b> Git, GitHub, Excel Automation, PyMuPDF, OpenAI API & Vector Embeddings"
        )
        story.append(Paragraph(skills_text, body_style))
        story.append(Spacer(1, 4))
        story.append(HRFlowable(width="100%", thickness=0.5, color=line_color, spaceBefore=4, spaceAfter=6))
        
        # Professional Experience
        story.append(Paragraph("PROFESSIONAL EXPERIENCE", section_heading))
        
        # Experience 1
        exp1_head = [
            [
                Paragraph("<b>Business Analyst & Data Analyst</b> | Aplus Technology Solutions Pvt Ltd", job_title_style),
                Paragraph("Aug 2024 – Present", meta_style)
            ]
        ]
        t1 = Table(exp1_head, colWidths=[400, 140])
        t1.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'MIDDLE'), ('PADDING', (0,0), (-1,-1), 0)]))
        story.append(t1)
        story.append(Paragraph("&bull; Spearheaded end-to-end GeM (Government e-Marketplace) tender analysis, mapping technical compliance matrices across high-volume bids.", bullet_style))
        story.append(Paragraph("&bull; Built and maintained automated ETL data pipelines in Python and PostgreSQL to analyze cross-border sales and inventory streams.", bullet_style))
        story.append(Paragraph("&bull; Coordinated with OEM partners to align technical product configurations with contract requirements.", bullet_style))
        story.append(Paragraph("&bull; Automated scheduled reporting routines, significantly reducing manual turnaround time and human error.", bullet_style))
        story.append(Spacer(1, 4))
        
        # Experience 2
        exp2_head = [
            [
                Paragraph("<b>Data Analyst Intern</b> | National Informatics Centre (NIC)", job_title_style),
                Paragraph("Feb 2024 – Jun 2024", meta_style)
            ]
        ]
        t2 = Table(exp2_head, colWidths=[400, 140])
        t2.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'MIDDLE'), ('PADDING', (0,0), (-1,-1), 0)]))
        story.append(t2)
        story.append(Paragraph("&bull; Engineered robust chunked data ingestion pipelines to parse and normalize large-scale IMDB relational datasets.", bullet_style))
        story.append(Paragraph("&bull; Designed relational constraints and indexing strategies in PostgreSQL for data cleansing cycles.", bullet_style))
        story.append(Paragraph("&bull; Automated analytical insight summaries and structured validation reports directly for core project leads.", bullet_style))
        story.append(Spacer(1, 4))
        story.append(HRFlowable(width="100%", thickness=0.5, color=line_color, spaceBefore=4, spaceAfter=6))
        
        # Key Projects
        story.append(Paragraph("KEY PROJECTS", section_heading))
        
        # Project 1: CRM & Sales Pipeline Management System
        story.append(Paragraph("<b>CRM & Sales Pipeline Management System</b> | <i>Python, Flask, PostgreSQL, SQLAlchemy, HTML, CSS, JavaScript</i>", job_title_style))
        story.append(Paragraph("&bull; <b>Description:</b> Developed and enhanced a CRM application to help sales teams manage customer information, sales opportunities, pipeline stages, activities, and follow-ups through a centralized system.", bullet_style))
        story.append(Paragraph("&bull; <b>Key Features:</b> Customer Management, Sales Opportunity Tracking, Multi-tier Role-Based Access Control, Opportunity Reassignment with Admin/Director/MD authorization, Activity & Follow-up Logging, and Sales Reporting Dashboards.", bullet_style))
        story.append(Paragraph("&bull; <b>My Role & Value:</b> Worked on backend development, database integration, and CRM workflow implementation. Contributed to sales opportunity management and role-based authorization to ensure sensitive operations could only be performed by authorized users.", bullet_style))
        story.append(Spacer(1, 3))
        
        # Project 2: TenderMatch AI
        story.append(Paragraph("<b>TenderMatch AI</b> | <i>Python, FastAPI, PostgreSQL, OpenAI API, PyMuPDF</i>", job_title_style))
        story.append(Paragraph("&bull; Built AI-powered tender analysis engine extracting technical parameters from PDF/DOCX and generating dynamic compliance matrices via semantic matching.", bullet_style))
        story.append(Spacer(1, 3))
        
        # Project 3: Samsung Sellout Automation
        story.append(Paragraph("<b>Samsung Sellout Automation</b> | <i>Python, Pandas, PostgreSQL, Excel Automation</i>", job_title_style))
        story.append(Paragraph("&bull; Automated strategic operational analytics over purchase registries, inventory stocks, and return logs, providing profitability trend analyses.", bullet_style))
        story.append(Spacer(1, 3))
        
        # Project 4: IMDB ETL Pipeline
        story.append(Paragraph("<b>IMDB ETL Pipeline</b> | <i>Python, Pandas, SQLAlchemy, PostgreSQL</i>", job_title_style))
        story.append(Paragraph("&bull; Large-scale data ingestion and sanitization pipeline with normalization, constraint validation, and relational PostgreSQL integration.", bullet_style))
        story.append(Spacer(1, 3))
        
        # Project 5: Customer Insights Reporting
        story.append(Paragraph("<b>Customer Insights Reporting</b> | <i>SQL, Excel, Python</i>", job_title_style))
        story.append(Paragraph("&bull; Corporate business intelligence pipeline pulling actionable sales cohorts and metrics via relational queries and automated reporting dashboards.", bullet_style))
        story.append(Spacer(1, 4))
        story.append(HRFlowable(width="100%", thickness=0.5, color=line_color, spaceBefore=4, spaceAfter=6))
        
        # Education & Certifications
        story.append(Paragraph("EDUCATION & CERTIFICATIONS", section_heading))
        edu_text = (
            "<b>B.Tech in Computer Science Engineering</b> — JC Bose University of Science & Technology (YMCA), Faridabad (2021 – 2024)<br/>"
            "<b>Diploma in Computer Science Engineering</b> — BSF Polytechnic (2018 – 2021)<br/>"
            "<b>Certifications:</b> Python Developer Certification (One Tick Technology) | Microsoft Azure Certified Cloud Architecture (Honeywell ICT Academy) | Microsoft Office Advanced Solutions Expert (NSIC) | TCS iON Career Edge (Young Professional Track)"
        )
        story.append(Paragraph(edu_text, body_style))
        
        doc.build(story)
        print(f"Generated {pdf_path} successfully.")

if __name__ == '__main__':
    create_resume()
