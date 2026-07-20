# Pipe Thickness Calculator | ASME B31.3
Live tool: https://medinikb.github.io/Pipe-Thickness-Calculator-ASME-B31.3/

Static GitHub Pages web app for preliminary straight pipe wall thickness calculation for internal pressure using the ASME B31.3 para 304.1.1 / 304.1.2 basis for `t < D/6`.

The app uses plain HTML, CSS, and JavaScript. It does not need React, a backend server, database, login system, or paid hosting.

## Product Goal

Help engineers quickly prepare a preliminary pipe thickness screening for one pipe line at a time, with clear input control, automated code-factor suggestions, visual pipe section output, engineering checks, and a printable audit report.

## Target Users

- Piping engineers
- Stress engineers
- Estimation engineers
- Project engineers
- Engineering reviewers who need a fast preliminary check before formal design verification

## Main Features

- Calculation context fields for objective, project number, and line/tag number
- Material dropdown populated from local data libraries
- API 5L X-grade material library support
- Automatic allowable stress lookup by material and design temperature
- Pipe type selection for seamless / welded pipe
- Automatic schedule library selection support for carbon steel and stainless steel
- Stainless schedule fallback to ASME B36.10M steel where needed
- Automatic `Y` coefficient lookup
- Automatic `W` factor lookup
- Editable `S`, `E`, `W`, and `Y` factors
- Pressure unit conversion to MPa
- Corrosion allowance and mill tolerance calculation, with percentage or fixed-mm basis
- ASTM A358/A358M-15 Clause 8.1.4 automation: A358 material selections default to a fixed 0.3 mm wall-thickness deduction
- Required nominal thickness calculation
- Nearest higher schedule selection
- 2D Section View with OD and required thickness dimensions
- Checks and warnings table for easier review
- API 574 Table 7 minimum alert thickness screening
- Upfront stress screening rules
- Material temperature-limit screening
- Scenario Playground / What-if Lab
- Professional Audit Calculation Report with Excel workbook export
- Print/PDF report with page numbering
- Light and dark mode
- GitHub Pages compatible

## Important Disclaimer

This tool is for preliminary engineering calculation support only. Final design shall be verified against the controlled code edition, project PMS, IBR requirements where applicable, and approved engineering judgment.

## File Structure

| File / Folder | Purpose |
|---|---|
| `index.html` | Main page structure, sidebar, input panels, results, reports, and app sections. |
| `style.css` | Visual design, layout, dark mode, responsive behavior, and print/PDF styling. |
| `app.js` | Calculator logic, auto-fill behavior, checks, reports, scenarios, and UI interactions. |
| `README.md` | GitHub project documentation. |
| `Logo_PTC.png` | Sidebar logo used by the app. |
| `data/` | Local engineering data libraries used by the calculator. |

## Required Data Libraries

Upload the complete `data/` folder with the app.

Key browser-loaded files:

```text
data/od_schedule_library_36_10.js
data/od_schedule_library_36_19.js
data/material_stress_library.js
data/api5l_x_grade_stress_library.js
data/y_factor_library.js
data/w_factor_library.js
data/api574_minimum_alert_thickness_table7.js
data/pipe_thickness_upfront_stress_screening_rules.js
data/astm_piping_material_specification_webapp.js
```

The matching `.json` files may also be uploaded for maintainability and future editing.

## Calculation Logic

The app calculates:

```text
t = P * D / (2 * (S * E * W + P * Y))
tm = t + corrosion allowance
minimum required nominal thickness = tm / (1 - mill tolerance) for percentage tolerance

For ASTM A358 fixed thickness deduction:

minimum required nominal thickness = tm + mill tolerance (mm)
```

Where:

| Symbol | Meaning |
|---|---|
| `P` | Design pressure converted to MPa |
| `D` | Outside diameter in mm |
| `S` | Allowable stress in MPa |
| `E` | Quality factor |
| `W` | Weld joint strength reduction factor |
| `Y` | ASME Y coefficient |
| `t` | Calculated pressure thickness |
| `tm` | Minimum thickness including corrosion allowance |

The app also checks:

- `t < D/6`
- `P / (S * E) <= 0.385`
- material temperature limits where available
- API 574 Table 7 screening where applicable
- upfront stress screening rules
- whether a higher standard schedule is available

## How To Run Locally

Prerequisite:

- Any modern browser such as Chrome, Edge, or Firefox
- Python only if you want to test through a local server

Run this command inside the project folder:

```powershell
python -m http.server 8008 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:8008/
```

Running a local server is recommended because it behaves more like GitHub Pages.

## How To Test

1. Open the app.
2. Confirm the default page is in reset/awaiting-calculation mode.
3. Click `Load Example`.
4. Confirm input fields are populated.
5. Click `Calculate Thickness`.
6. Confirm the result panel shows:
   - minimum required nominal thickness
   - selected schedule
   - 2D Section View
   - checks and warnings
7. Open `Show Report`.
8. Click `Excel` under `Audit Calculation Report` and open the downloaded workbook in Excel.
9. Confirm the workbook contains the executive summary, design basis, calculation flow, checks, notes, and approval fields.
10. Click `Print/PDF`.
11. Confirm the PDF report keeps the 2D Section View on page 1.
12. Confirm `Design Input Basis` starts on page 2.
11. Toggle light/dark mode and confirm text remains readable.
12. Open `Show What-if Lab` and confirm scenario values update.

## GitHub Pages Deployment

Upload these items:

```text
index.html
style.css
app.js
README.md
Logo_PTC.png
data/
```

Then:

1. Create a GitHub repository.
2. Upload the required files and folders.
3. Go to repository `Settings`.
4. Open `Pages`.
5. Select source branch, usually `main`.
6. Select root folder `/`.
7. Save.
8. Open the published GitHub Pages URL and test again.

## Do Not Upload To Public GitHub

Avoid uploading local testing files, temporary screenshots, private project documents, and copyrighted code PDFs.

Examples:

```text
.chrome-cache/
.pw-profile/
tmp/
UI Design/
*.pdf
*.docx
*.xlsx
*.xls
dark-example-after-fix.png
dark-example-before-fix.png
sidebar-*.png
theme-*.png
redesign-verification.png
pipe_thickness_calculator_b31_3.html
pipe_thickness_report_review.html
Design_1.png
```

## Product Owner Decisions

Before using this as a serious business tool, decide:

| Decision | Why It Matters |
|---|---|
| Controlled ASME B31.3 edition | Stress values and requirements can change by edition. |
| PMS / project basis | Project PMS may override default assumptions. |
| IBR applicability | IBR requirements may change design and approval workflow. |
| B31.1 vs B31.3 basis | Steam lines may need basis confirmation. |
| Published material data rights | Some stress table data may have licensing restrictions. |
| Final approver | Preliminary app output must be reviewed by competent engineering authority. |
| Batch calculation need | Current app is optimized for one line at a time. |

## Next Top 10 Use Cases

The future vision is to expand this tool from a single-line pipe thickness calculator into a refinery-wide piping lifecycle decision-support platform.

1. **Batch Excel Line-List Upload**
   Upload hundreds or thousands of piping lines, map columns, validate inputs, calculate required thickness, and export consolidated results.

2. **Existing Pipe Adequacy Assessment**
   Compare installed nominal thickness and measured thickness against the minimum required thickness for current operating conditions.

3. **UT Thickness and Corrosion-Rate Analysis**
   Upload inspection readings to calculate short-term and long-term corrosion rates, remaining corrosion allowance, and abnormal thinning trends.

4. **Remaining-Life and Next-Inspection Prediction**
   Estimate remaining life, projected thickness at the next turnaround, and recommended inspection due dates.

5. **MAWP and Rerating Assessment**
   Calculate maximum allowable working pressure using actual measured thickness and evaluate revised operating limits or debottlenecking scenarios.

6. **MOC Impact Assessment**
   Reassess affected piping when pressure, temperature, flow, service, feed composition, material, or process conditions are changed.

7. **Turnaround Scope Identification**
   Identify piping lines requiring inspection, repair, replacement, material upgrade, or detailed fitness-for-service assessment during the next shutdown.

8. **Project Design and PMS Verification**
   Compare calculated thickness, selected schedule, project line list, piping material specification, and approved design basis to identify underdesign or overdesign.

9. **Inspection and Integrity Dashboard**
   Provide unit-wise visibility of inadequate lines, low remaining-life piping, overdue inspections, high corrosion-rate locations, and open temporary repairs.

10. **Lifecycle Cost and Replacement Planning**
    Estimate pipe replacement quantities, material and service costs, inspection expenditure, repair-versus-replacement economics, and one-year to five-year integrity investment requirements.

### Long-Term Product Vision

Create a controlled digital workflow connecting project engineering, procurement, construction, inspection, operations, maintenance, MOC, turnaround planning, and asset retirement. The calculation engine will remain deterministic and code-based, while AI will support data mapping, exception explanation, document review, reporting, and management decision-making.
