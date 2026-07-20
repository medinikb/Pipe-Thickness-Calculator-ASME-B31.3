const fallbackPipeLibrary = {
      "1/2": { od: 21.3, schedules: [{sch:"STD", thk:2.77}, {sch:"SCH 40", thk:2.77}, {sch:"SCH 80", thk:3.73}, {sch:"SCH 160", thk:4.78}] },
      "3/4": { od: 26.7, schedules: [{sch:"STD", thk:2.87}, {sch:"SCH 40", thk:2.87}, {sch:"SCH 80", thk:3.91}, {sch:"SCH 160", thk:5.56}] },
      "1": { od: 33.4, schedules: [{sch:"STD", thk:3.38}, {sch:"SCH 40", thk:3.38}, {sch:"SCH 80", thk:4.55}, {sch:"SCH 160", thk:6.35}] },
      "1 1/2": { od: 48.3, schedules: [{sch:"STD", thk:3.68}, {sch:"SCH 40", thk:3.68}, {sch:"SCH 80", thk:5.08}, {sch:"SCH 160", thk:7.14}] },
      "2": { od: 60.3, schedules: [{sch:"STD", thk:3.91}, {sch:"SCH 40", thk:3.91}, {sch:"SCH 80", thk:5.54}, {sch:"SCH 160", thk:8.74}] },
      "3": { od: 88.9, schedules: [{sch:"STD", thk:5.49}, {sch:"SCH 40", thk:5.49}, {sch:"SCH 80", thk:7.62}, {sch:"SCH 160", thk:11.13}] },
      "4": { od: 114.3, schedules: [{sch:"STD", thk:6.02}, {sch:"SCH 40", thk:6.02}, {sch:"SCH 80", thk:8.56}, {sch:"SCH 120", thk:11.13}, {sch:"SCH 160", thk:13.49}] },
      "6": { od: 168.3, schedules: [{sch:"STD", thk:7.11}, {sch:"SCH 40", thk:7.11}, {sch:"SCH 80", thk:10.97}, {sch:"SCH 120", thk:14.27}, {sch:"SCH 160", thk:18.26}] },
      "8": { od: 219.1, schedules: [{sch:"STD", thk:8.18}, {sch:"SCH 40", thk:8.18}, {sch:"SCH 60", thk:10.31}, {sch:"SCH 80", thk:12.70}, {sch:"SCH 120", thk:18.26}, {sch:"SCH 160", thk:23.01}] },
      "10": { od: 273.1, schedules: [{sch:"STD", thk:9.27}, {sch:"SCH 40", thk:9.27}, {sch:"SCH 60", thk:12.70}, {sch:"SCH 80", thk:15.09}, {sch:"SCH 120", thk:21.44}, {sch:"SCH 160", thk:28.58}] },
      "12": { od: 323.9, schedules: [{sch:"STD", thk:9.53}, {sch:"SCH 40", thk:10.31}, {sch:"SCH 60", thk:14.27}, {sch:"SCH 80", thk:17.48}, {sch:"SCH 120", thk:25.40}, {sch:"SCH 160", thk:33.32}] },
      "14": { od: 355.6, schedules: [{sch:"STD", thk:9.53}, {sch:"SCH 40", thk:11.13}, {sch:"SCH 60", thk:15.09}, {sch:"SCH 80", thk:19.05}, {sch:"SCH 100", thk:23.83}, {sch:"SCH 120", thk:27.79}, {sch:"SCH 160", thk:35.71}] },
      "16": { od: 406.4, schedules: [{sch:"STD", thk:9.53}, {sch:"SCH 40", thk:12.70}, {sch:"SCH 60", thk:16.66}, {sch:"SCH 80", thk:21.44}, {sch:"SCH 100", thk:26.19}, {sch:"SCH 120", thk:30.96}, {sch:"SCH 160", thk:40.49}] },
      "18": { od: 457.0, schedules: [{sch:"STD", thk:9.53}, {sch:"SCH 40", thk:14.27}, {sch:"SCH 60", thk:19.05}, {sch:"SCH 80", thk:23.83}, {sch:"SCH 100", thk:29.36}, {sch:"SCH 120", thk:34.93}, {sch:"SCH 140", thk:39.67}, {sch:"SCH 160", thk:45.24}] },
      "20": { od: 508.0, schedules: [{sch:"STD", thk:9.53}, {sch:"SCH 40", thk:15.09}, {sch:"SCH 60", thk:20.62}, {sch:"SCH 80", thk:26.19}, {sch:"SCH 100", thk:32.54}, {sch:"SCH 120", thk:38.10}, {sch:"SCH 160", thk:50.01}] },
      "24": { od: 610.0, schedules: [{sch:"STD", thk:9.53}, {sch:"SCH 40", thk:17.48}, {sch:"SCH 60", thk:24.61}, {sch:"SCH 80", thk:30.96}, {sch:"SCH 100", thk:38.89}, {sch:"SCH 120", thk:46.02}, {sch:"SCH 160", thk:59.54}] },
      "30": { od: 762.0, schedules: [{sch:"STD", thk:9.53}, {sch:"SCH 20", thk:12.70}, {sch:"SCH 30", thk:15.88}, {sch:"SCH 40", thk:17.48}, {sch:"SCH 60", thk:26.97}, {sch:"SCH 80", thk:38.89}] },
      "36": { od: 914.0, schedules: [{sch:"STD", thk:9.53}, {sch:"SCH 20", thk:12.70}, {sch:"SCH 30", thk:15.88}, {sch:"SCH 40", thk:19.05}, {sch:"SCH 60", thk:31.75}, {sch:"SCH 80", thk:45.24}] },
      "42": { od: 1067.0, schedules: [{sch:"STD", thk:9.53}, {sch:"SCH 20", thk:12.70}, {sch:"SCH 30", thk:15.88}, {sch:"SCH 40", thk:19.05}, {sch:"SCH 60", thk:31.75}, {sch:"SCH 80", thk:45.24}] },
      "48": { od: 1219.0, schedules: [{sch:"STD", thk:9.53}, {sch:"SCH 20", thk:12.70}, {sch:"SCH 30", thk:15.88}, {sch:"SCH 40", thk:19.05}, {sch:"SCH 60", thk:31.75}, {sch:"SCH 80", thk:45.24}] }
    };

    let scheduleLibraries = {
      b3610: fallbackPipeLibrary,
      b3619: fallbackPipeLibrary
    };
    let activeScheduleSource = "b3610";
    let pipeLibrary = fallbackPipeLibrary;
    let materialStressLibrary = null;
    let api5lXGradeLibrary = null;
    let yFactorLibrary = null;
    let wFactorLibrary = null;
    let api574Table7Library = null;
    let upfrontStressScreeningLibrary = null;
    let astmMaterialSpecLibrary = null;
    let automationMessages = [];
    let inputToastTimer = null;
    let lastMillToleranceMaterial = null;

    const scheduleJsonFiles = {
      b3610: "data/od_schedule_library_36_10.json",
      b3619: "data/od_schedule_library_36_19.json"
    };

    const scheduleGlobalNames = {
      b3610: "OD_SCHEDULE_LIBRARY_36_10",
      b3619: "OD_SCHEDULE_LIBRARY_36_19"
    };

    const engineeringJsonFiles = {
      materialStress: "data/material_stress_library.json",
      api5lXGradeStress: "data/api5l_x_grade_stress_library.json",
      yFactor: "data/y_factor_library.json",
      wFactor: "data/w_factor_library.json",
      api574Table7: "data/api574_minimum_alert_thickness_table7.json",
      upfrontStressScreening: "data/pipe_thickness_upfront_stress_screening_rules.json",
      astmMaterialSpec: "data/astm_piping_material_specification_webapp.json"
    };

    const scheduleSourceLabels = {
      b3610: "ASME B36.10M steel",
      b3619: "ASME B36.19M stainless"
    };

    const thinWallFailureMessage = "Thin-wall check failed: calculated pressure thickness t is not less than D/6. This is outside the normal equation range.";

    const pressureInputRanges = {
      kgcm2: { min: 0.01, max: 1000, unit: "kg/cm2" },
      bar: { min: 0.001, max: 1000, unit: "bar" },
      mpa: { min: 0.0001, max: 100, unit: "MPa" },
      kpa: { min: 1, max: 100000, unit: "kPa" },
      psi: { min: 0.1, max: 14500, unit: "psi" }
    };

    const npsDisplayOrder = [
      "1/2", "3/4", "1", "1 1/2", "2", "3", "4", "6", "8",
      "10", "12", "14", "16", "18", "20", "22", "24", "26", "28",
      "30", "32", "34", "36", "38", "40", "42", "44", "46", "48"
    ];

    const sampleCase = {
      pressure: 49,
      pressureUnit: "kgcm2",
      temperature: 480,
      nps: "18",
      scheduleSource: "b3610",
      od: 457,
      material: "ASTM A335 GR.P11",
      pipeType: "seamless",
      stress: 94.08,
      quality: 1.000,
      wFactor: 1.000,
      yFactor: 0.400,
      corrosion: 1.5,
      tolerance: 12.5,
      millToleranceMode: "percent",
      calcObjective: "Verify minimum required nominal thickness for HP steam pipe line as per ASME B31.3.",
      projectNo: "NRL/CDU-VDU/RTA-2027",
      lineNo: "18\"-SM-20-2301-B2A-IH",
      notes: "IBR HP steam service. Verify B31.3/B31.1/IBR governing basis, approved stress value, PMS, PWHT, NDE, flexibility, branch reinforcement and hydrotest separately."
    };

    const els = {
      form: document.getElementById("calcForm"),
      calcObjective: document.getElementById("calcObjective"),
      projectNo: document.getElementById("projectNo"),
      lineNo: document.getElementById("lineNo"),
      nps: document.getElementById("nps"),
      scheduleSource: document.getElementById("scheduleSource"),
      od: document.getElementById("od"),
      pressure: document.getElementById("pressure"),
      pressureUnit: document.getElementById("pressureUnit"),
      temperature: document.getElementById("temperature"),
      material: document.getElementById("material"),
      pipeType: document.getElementById("pipeType"),
      materialVariant: document.getElementById("materialVariant"),
      materialVariantField: document.getElementById("materialVariantField"),
      stress: document.getElementById("stress"),
      quality: document.getElementById("quality"),
      wFactor: document.getElementById("wFactor"),
      yFactor: document.getElementById("yFactor"),
      corrosion: document.getElementById("corrosion"),
      tolerance: document.getElementById("tolerance"),
      millToleranceMode: document.getElementById("millToleranceMode"),
      millToleranceUnit: document.getElementById("millToleranceUnit"),
      millToleranceStatus: document.getElementById("millToleranceStatus"),
      notes: document.getElementById("notes"),
      tPressure: document.getElementById("tPressure"),
      tmValue: document.getElementById("tmValue"),
      nominalValue: document.getElementById("nominalValue"),
      scheduleValue: document.getElementById("scheduleValue"),
      scheduleThickness: document.getElementById("scheduleThickness"),
      dBySix: document.getElementById("dBySix"),
      sectionScheduleLabel: document.getElementById("sectionScheduleLabel"),
      sectionOdLabel: document.getElementById("sectionOdLabel"),
      sectionRequiredLabel: document.getElementById("sectionRequiredLabel"),
      pipeInnerCircle: document.getElementById("pipeInnerCircle"),
      sectionInnerGuide: document.getElementById("sectionInnerGuide"),
      sectionOuterGuide: document.getElementById("sectionOuterGuide"),
      sectionInnerArrow: document.getElementById("sectionInnerArrow"),
      sectionOuterArrow: document.getElementById("sectionOuterArrow"),
      sectionInnerArrowHead: document.getElementById("sectionInnerArrowHead"),
      sectionOuterArrowHead: document.getElementById("sectionOuterArrowHead"),
      flowPressureThickness: document.getElementById("flowPressureThickness"),
      flowAfterCorrosion: document.getElementById("flowAfterCorrosion"),
      flowTolerancePct: document.getElementById("flowTolerancePct"),
      flowToleranceBasis: document.getElementById("flowToleranceBasis"),
      flowRequiredNominal: document.getElementById("flowRequiredNominal"),
      flowScheduleName: document.getElementById("flowScheduleName"),
      flowScheduleThickness: document.getElementById("flowScheduleThickness"),
      flowBarPressureValue: document.getElementById("flowBarPressureValue"),
      flowBarCorrosionValue: document.getElementById("flowBarCorrosionValue"),
      flowBarToleranceValue: document.getElementById("flowBarToleranceValue"),
      flowBarFinalValue: document.getElementById("flowBarFinalValue"),
      flowBarPressure: document.getElementById("flowBarPressure"),
      flowBarCorrosion: document.getElementById("flowBarCorrosion"),
      flowBarTolerance: document.getElementById("flowBarTolerance"),
      flowBarFinal: document.getElementById("flowBarFinal"),
      scheduleMetric: document.getElementById("scheduleMetric"),
      warningsBox: document.getElementById("warningsBox"),
      reportBox: document.getElementById("reportBox"),
      statusBadge: document.getElementById("statusBadge"),
      statusDetail: document.getElementById("statusDetail"),
      statusIcon: document.getElementById("statusIcon"),
      resultStatusBanner: document.getElementById("resultStatusBanner"),
      inputToast: document.getElementById("inputToast"),
      inputToastMessage: document.getElementById("inputToastMessage"),
      calculateBtn: document.getElementById("calculateBtn"),
      exampleBtn: document.getElementById("exampleBtn"),
      resetBtn: document.getElementById("resetBtn"),
      copyBtn: document.getElementById("copyBtn"),
      printBtn: document.getElementById("printBtn"),
      reportExcelBtn: document.getElementById("reportExcelBtn"),
      reportPrintBtn: document.getElementById("reportPrintBtn"),
      reportToggleBtn: document.getElementById("reportToggleBtn"),
      scenarioToggleBtn: document.getElementById("scenarioToggleBtn"),
      sidebarToggle: document.getElementById("sidebarToggle"),
      themeToggle: document.getElementById("themeToggle"),
      themeToggleText: document.getElementById("themeToggleText"),
      logoHomeBtn: document.getElementById("logoHomeBtn"),
      csvBtn: document.getElementById("csvBtn"),
      libraryStatus: document.getElementById("libraryStatus"),
      autoFillStatus: document.getElementById("autoFillStatus")
    };

    let lastResult = null;

    function normalizeNps(size) {
      return String(size).replace("-", " ");
    }

    function displayNps(size) {
      const labels = {
        "1/2": "1/2\"",
        "3/4": "3/4\"",
        "1": "1\"",
        "1 1/2": "1½\""
      };
      return labels[size] || `${size}"`;
    }

    function formatScheduleName(item) {
      const schedule = item.schedule ? `SCH ${item.schedule}` : "";
      const designation = item.designation ? item.designation : "";
      return [schedule, designation].filter(Boolean).join(" / ") || "Tabulated";
    }

    function setSidebarCollapsed(collapsed) {
      document.body.classList.toggle("sidebar-collapsed", collapsed);
      if (els.sidebarToggle) {
        els.sidebarToggle.setAttribute("aria-expanded", String(!collapsed));
        const toggleLabel = collapsed ? "Open sidebar" : "Close sidebar";
        els.sidebarToggle.setAttribute("aria-label", toggleLabel);
        els.sidebarToggle.title = toggleLabel;
      }
      try {
        localStorage.setItem("pipeCalcSidebarCollapsed", collapsed ? "1" : "0");
      } catch (error) {
        // Storage can be blocked in some local-browser modes; the sidebar still works for the current page.
      }
    }

    function initSidebarNavigation() {
      try {
        setSidebarCollapsed(localStorage.getItem("pipeCalcSidebarCollapsed") === "1");
      } catch (error) {
        setSidebarCollapsed(false);
      }

      if (els.sidebarToggle) {
        els.sidebarToggle.addEventListener("click", () => {
          setSidebarCollapsed(!document.body.classList.contains("sidebar-collapsed"));
        });
      }

      if (els.logoHomeBtn) {
        els.logoHomeBtn.addEventListener("click", () => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          document.querySelectorAll(".side-nav a").forEach(item => item.classList.remove("active"));
          document.querySelector('.side-nav a[href="#calcForm"]')?.classList.add("active");
        });
      }

      document.querySelectorAll(".side-nav a").forEach(link => {
        link.addEventListener("click", () => {
          document.querySelectorAll(".side-nav a").forEach(item => item.classList.remove("active"));
          link.classList.add("active");
        });
      });
    }

    function setThemeMode(mode) {
      const dark = mode === "dark";
      document.body.classList.toggle("dark-mode", dark);
      if (els.themeToggle) {
        els.themeToggle.setAttribute("aria-pressed", String(dark));
        els.themeToggle.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
        els.themeToggle.title = dark ? "Switch to light mode" : "Switch to dark mode";
      }
      if (els.themeToggleText) {
        els.themeToggleText.textContent = dark ? "Light Mode" : "Dark Mode";
      }
      try {
        localStorage.setItem("pipeCalcTheme", dark ? "dark" : "light");
      } catch (error) {
        // Theme still changes for the current page even when storage is blocked.
      }
    }

    function initThemeToggle() {
      let savedTheme = "light";
      try {
        savedTheme = localStorage.getItem("pipeCalcTheme") || "light";
      } catch (error) {
        savedTheme = "light";
      }
      setThemeMode(savedTheme === "dark" ? "dark" : "light");

      if (els.themeToggle) {
        els.themeToggle.addEventListener("click", () => {
          const nextMode = document.body.classList.contains("dark-mode") ? "light" : "dark";
          setThemeMode(nextMode);
        });
      }
    }

    function normalizeScheduleLibrary(json) {
      if (!json || !json.data_by_nps) return fallbackPipeLibrary;

      return Object.fromEntries(Object.entries(json.data_by_nps).map(([rawSize, entry]) => {
        const schedules = Object.values(entry.schedules || {})
          .filter(item => Number.isFinite(Number(item.wall_mm)) && (item.schedule || item.designation))
          .map(item => ({
            sch: formatScheduleName(item),
            thk: Number(item.wall_mm),
            source: item.standard_display || json.metadata?.standard_display || "Schedule library"
          }))
          .sort((a, b) => a.thk - b.thk);

        return [normalizeNps(rawSize), {
          od: Number(entry.od_mm),
          schedules
        }];
      }));
    }

    async function loadScheduleLibraries() {
      const results = await Promise.all(Object.entries(scheduleJsonFiles).map(async ([key, file]) => {
        try {
          const json = window[scheduleGlobalNames[key]] || await (async () => {
            const response = await fetch(file);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            return response.json();
          })();
          return [key, normalizeScheduleLibrary(json), null];
        } catch (error) {
          return [key, fallbackPipeLibrary, error.message];
        }
      }));

      const failed = [];
      results.forEach(([key, library, error]) => {
        scheduleLibraries[key] = library;
        if (error) failed.push(scheduleSourceLabels[key]);
      });

      if (failed.length) {
        els.libraryStatus.textContent = `Backup: ${failed.join(", ")}`;
      } else {
        els.libraryStatus.textContent = "Auto";
      }
    }

    async function loadEngineeringLibraries() {
      const loadJson = async (file, globalName) => {
        if (window[globalName]) return { data: window[globalName], source: "embedded fallback" };

        const response = await fetch(file);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return { data: await response.json(), source: "JSON fetch" };
      };

      const [materialResult, api5lResult, yResult, wResult, api574Result, upfrontStressResult, astmSpecResult] = await Promise.allSettled([
        loadJson(engineeringJsonFiles.materialStress, "MATERIAL_STRESS_LIBRARY"),
        loadJson(engineeringJsonFiles.api5lXGradeStress, "API5L_X_GRADE_STRESS_LIBRARY"),
        loadJson(engineeringJsonFiles.yFactor, "Y_FACTOR_LIBRARY"),
        loadJson(engineeringJsonFiles.wFactor, "W_FACTOR_LIBRARY"),
        loadJson(engineeringJsonFiles.api574Table7, "API574_MINIMUM_ALERT_THICKNESS_TABLE7"),
        loadJson(engineeringJsonFiles.upfrontStressScreening, "PIPE_THICKNESS_UPFRONT_STRESS_SCREENING_RULES"),
        loadJson(engineeringJsonFiles.astmMaterialSpec, "ASTM_PIPING_MATERIAL_SPECIFICATION_WEBAPP")
      ]);

      if (materialResult.status === "fulfilled") {
        materialStressLibrary = materialResult.value.data;
        if (api5lResult.status === "fulfilled") {
          api5lXGradeLibrary = api5lResult.value.data;
          appendApi5lXGradeMaterials();
        }
        populateMaterialDropdown(sampleCase.material);
      } else {
        materialStressLibrary = null;
        populateMaterialDropdown("Manual material");
      }

      yFactorLibrary = yResult.status === "fulfilled" ? yResult.value.data : null;
      wFactorLibrary = wResult.status === "fulfilled" ? wResult.value.data : null;
      api574Table7Library = api574Result.status === "fulfilled" ? api574Result.value.data : null;
      upfrontStressScreeningLibrary = upfrontStressResult.status === "fulfilled" ? upfrontStressResult.value.data : null;
      astmMaterialSpecLibrary = astmSpecResult.status === "fulfilled" ? astmSpecResult.value.data : null;

      const loaded = [
        materialResult.status === "fulfilled" ? `materials via ${materialResult.value.source}` : null,
        api5lResult.status === "fulfilled" ? `API 5L X grades via ${api5lResult.value.source}` : null,
        yResult.status === "fulfilled" ? `Y factors via ${yResult.value.source}` : null,
        wResult.status === "fulfilled" ? `W factors via ${wResult.value.source}` : null,
        api574Result.status === "fulfilled" ? `API 574 Table 7 via ${api574Result.value.source}` : null,
        upfrontStressResult.status === "fulfilled" ? `upfront stress screening via ${upfrontStressResult.value.source}` : null,
        astmSpecResult.status === "fulfilled" ? `ASTM material temperature limits via ${astmSpecResult.value.source}` : null
      ].filter(Boolean);

      const missing = [
        materialResult.status === "rejected" ? "materials" : null,
        api5lResult.status === "rejected" ? "API 5L X grades" : null,
        yResult.status === "rejected" ? "Y factors" : null,
        wResult.status === "rejected" ? "W factors" : null,
        api574Result.status === "rejected" ? "API 574 Table 7" : null,
        upfrontStressResult.status === "rejected" ? "upfront stress screening" : null,
        astmSpecResult.status === "rejected" ? "ASTM material temperature limits" : null
      ].filter(Boolean);

      if (loaded.length) {
        els.autoFillStatus.textContent = `Automation loaded: ${loaded.join(", ")}. ${missing.length ? `Manual entry needed for: ${missing.join(", ")}.` : "S, E, W and Y will auto-fill from material, pipe type and temperature."}`;
      } else {
        els.autoFillStatus.textContent = "Automation libraries could not load. Manual S, E, W and Y entry is still available.";
      }
    }

    function appendApi5lXGradeMaterials() {
      if (!materialStressLibrary || !api5lXGradeLibrary?.materials?.length) return;

      materialStressLibrary.temperature_grids.api5l_x_grade_pipe = api5lXGradeLibrary.temperature_grid_c;
      materialStressLibrary.note_summaries = {
        ...(materialStressLibrary.note_summaries || {}),
        ...(api5lXGradeLibrary.note_summaries || {})
      };

      const existingNames = new Set(materialStressLibrary.materials.map(item => normalizeText(item.input_description)));
      const xGradeRows = api5lXGradeLibrary.materials
        .map(item => ({
          input_description: item.display_name,
          status: "listed",
          canonical_spec: item.spec_no,
          canonical_grade: item.type_grade,
          nominal_composition: item.nominal_composition,
          product_form: item.product_form,
          p_no: item.p_no,
          notes: item.notes || [],
          min_temp_c: item.min_temp_code,
          min_tensile_mpa: item.min_tensile_strength_mpa,
          min_yield_mpa: item.min_yield_strength_mpa,
          max_use_temp_c: item.max_use_temp_c,
          stress_grid: "api5l_x_grade_pipe",
          stress_mpa: item.stress_mpa,
          source_location: `${api5lXGradeLibrary.metadata?.source_table || "ASME B31.3 Table A-1M"}, line ${item.asme_line_no}`
        }))
        .filter(item => !existingNames.has(normalizeText(item.input_description)));

      materialStressLibrary.materials.push(...xGradeRows);
      materialStressLibrary.materials.sort((a, b) => a.input_description.localeCompare(b.input_description));
    }

    function populateMaterialDropdown(selectedMaterial) {
      els.material.innerHTML = "";

      if (!materialStressLibrary?.materials?.length) {
        const option = document.createElement("option");
        option.value = "Manual material";
        option.textContent = "Manual material";
        els.material.appendChild(option);
        return;
      }

      materialStressLibrary.materials.forEach(material => {
        const option = document.createElement("option");
        option.value = material.input_description;
        option.textContent = material.input_description;
        if (material.input_description === selectedMaterial) option.selected = true;
        els.material.appendChild(option);
      });

      const manualOption = document.createElement("option");
      manualOption.value = "Manual material";
      manualOption.textContent = "Manual material";
      els.material.appendChild(manualOption);
    }

    function findMaterialNameByKeywords(keywords, fallback = sampleCase.material) {
      const normalizedKeywords = keywords.map(normalizeText);
      const match = materialStressLibrary?.materials?.find(material => {
        const name = normalizeText(material.input_description);
        return normalizedKeywords.every(keyword => name.includes(keyword));
      });
      return match?.input_description || fallback;
    }

    function normalizeText(value) {
      return String(value || "")
        .toUpperCase()
        .replace(/[^A-Z0-9]+/g, " ")
        .replace(/\s+/g, " ")
        .trim();
    }

    function interpolate(x, x1, y1, x2, y2) {
      return y1 + ((x - x1) * (y2 - y1)) / (x2 - x1);
    }

    function getSelectedMaterial() {
      if (!materialStressLibrary?.materials) return null;
      return materialStressLibrary.materials.find(item => item.input_description === els.material.value) || null;
    }

    function populateMaterialVariants(material) {
      const variants = material?.variants || [];
      const selectedVariant = els.materialVariant.value;
      els.materialVariant.innerHTML = "";

      if (!variants.length) {
        els.materialVariantField.classList.add("hidden");
        return;
      }

      variants.forEach((variant, index) => {
        const option = document.createElement("option");
        option.value = String(index);
        option.textContent = `${variant.variant_id} | ${variant.product_form || "product"} | ${variant.size_condition_mm || "size condition"}`;
        if (String(index) === selectedVariant) option.selected = true;
        els.materialVariant.appendChild(option);
      });

      els.materialVariantField.classList.remove("hidden");
    }

    function getSelectedStressRow(material) {
      if (!material) return null;
      if (Array.isArray(material.variants) && material.variants.length) {
        return material.variants[Number(els.materialVariant.value) || 0];
      }
      return material;
    }

    function preferredScheduleSourceForMaterial(material, stressRow) {
      const searchableText = normalizeText([
        material?.input_description,
        material?.canonical_spec,
        material?.canonical_grade,
        material?.nominal_composition,
        material?.product_form,
        stressRow?.stress_grid,
        stressRow?.canonical_spec,
        stressRow?.canonical_grade
      ].filter(Boolean).join(" "));

      const isStainless = stressRow?.stress_grid === "austenitic_ss_pipe"
        || searchableText.includes("STAINLESS")
        || searchableText.includes("AUSTENITIC")
        || searchableText.includes("A312")
        || searchableText.includes("A 312")
        || searchableText.includes("A358")
        || searchableText.includes("A 358")
        || searchableText.includes("TP304")
        || searchableText.includes("TP316")
        || searchableText.includes("TP321")
        || searchableText.includes("TP347");

      return isStainless ? "b3619" : "b3610";
    }

    function isA358Material(material, stressRow) {
      const searchableText = normalizeText([
        material?.input_description,
        material?.canonical_spec,
        stressRow?.canonical_spec
      ].filter(Boolean).join(" "));
      return searchableText.includes("A358") || searchableText.includes("A 358");
    }

    function formatMillToleranceValue(value, mode) {
      if (mode !== "fixed_mm") return round(value, 3);
      return String(Number(Number(value).toFixed(3)));
    }

    function getMillToleranceDetails() {
      const mode = els.millToleranceMode.value === "fixed_mm" ? "fixed_mm" : "percent";
      const value = toNumber(els.tolerance, "Mill tolerance");
      const max = mode === "fixed_mm" ? 10 : 25;
      const unit = mode === "fixed_mm" ? "mm" : "%";
      checkRange(value, 0, max, "Mill tolerance", unit, "tolerance");

      return {
        mode,
        value,
        unit,
        label: mode === "fixed_mm" ? `${formatMillToleranceValue(value, mode)} mm fixed deduction` : `${round(value, 3)}% reduction`,
        flowLabel: mode === "fixed_mm" ? `${formatMillToleranceValue(value, mode)} mm` : `${round(value, 2)}%`,
        formula: mode === "fixed_mm"
          ? `tn = tm + ${formatMillToleranceValue(value, mode)} mm`
          : "tn = tm / (1 - tolerance)"
      };
    }

    function requiredNominalFromMillTolerance(tm, millTolerance) {
      return millTolerance.mode === "fixed_mm"
        ? tm + millTolerance.value
        : tm / (1 - millTolerance.value / 100);
    }

    function syncMillToleranceControl() {
      const fixedMm = els.millToleranceMode.value === "fixed_mm";
      els.millToleranceUnit.textContent = fixedMm ? "mm" : "%";
      els.tolerance.max = fixedMm ? "10" : "25";
      els.tolerance.setAttribute("aria-label", fixedMm ? "Mill tolerance fixed deduction in millimetres" : "Mill tolerance percentage");
    }

    function flattenTextParts(value) {
      if (Array.isArray(value)) return value.flatMap(flattenTextParts);
      if (value && typeof value === "object") return Object.values(value).flatMap(flattenTextParts);
      return value == null ? [] : [String(value)];
    }

    function parseCelsiusLimit(limit) {
      const text = String(limit?.celsius || "");
      const values = text.match(/-?\s*\d+(?:\.\d+)?/g)?.map(item => Number(item.replace(/\s+/g, ""))) || [];
      if (values.length < 2) return null;
      return {
        min: Math.min(values[0], values[values.length - 1]),
        max: Math.max(values[0], values[values.length - 1]),
        label: text.replace(/[()]/g, "").replace(/\s+/g, " ").trim()
      };
    }

    function materialSpecMatches(rowText, material, stressRow) {
      const rowNormalized = normalizeText(rowText);
      const rowCompact = rowNormalized.replace(/\s+/g, "");
      const specCandidates = [
        stressRow?.canonical_spec,
        material?.canonical_spec,
        material?.input_description?.match(/(?:API\s*5L|A\s*\d{3,4}|ASTM\s*A\s*\d{3,4}|IS\s*-?\s*\d{3,4})/i)?.[0]
      ].filter(Boolean);

      const specMatch = specCandidates.some(spec => {
        const specNormalized = normalizeText(spec);
        const specCompact = specNormalized.replace(/\s+/g, "");
        return specCompact && rowCompact.includes(specCompact);
      });
      if (!specMatch) return false;

      const grade = normalizeText(stressRow?.canonical_grade || material?.canonical_grade || "");
      if (!grade) return true;

      const gradeVariants = new Set([
        grade,
        grade.replace(/^GR\s+/, ""),
        grade.replace(/^GRADE\s+/, ""),
        grade.replace(/^TP\s+/, ""),
        grade.replace(/^CL\s+/, ""),
        grade.replace(/\s+/g, "")
      ].filter(Boolean));

      const rowWords = new Set(rowNormalized.split(" "));
      const rowHasGrade = [...gradeVariants].some(item => {
        const compact = item.replace(/\s+/g, "");
        return rowNormalized.includes(item) || rowCompact.includes(compact) || rowWords.has(compact);
      });

      const rowLooksGradeGeneric = /\/|GR|GRADE|TP|TYPE|CLASS|CL/.test(rowNormalized);
      return rowHasGrade || !rowLooksGradeGeneric;
    }

    function findAstmMaterialSpecLimit(material, stressRow) {
      const rows = astmMaterialSpecLibrary?.material_specification_rows || [];
      if (!material || !rows.length) return null;

      for (const row of rows) {
        const pipeMaterialText = flattenTextParts(row.pipes?.material_standard).join(" ");
        const limit = parseCelsiusLimit(row.temperature_limit);
        if (!pipeMaterialText || !limit) continue;

        if (materialSpecMatches(pipeMaterialText, material, stressRow)) {
          return {
            rowId: row.id,
            materialGroup: row.basic_material_of_construction || "ASTM material specification",
            pipeStandards: flattenTextParts(row.pipes?.material_standard).join(", "),
            min: limit.min,
            max: limit.max,
            label: limit.label || `${limit.min} to ${limit.max} deg C`
          };
        }
      }

      return null;
    }

    function evaluateMaterialSpecificationTemperature(material, stressRow, tempC) {
      const limit = findAstmMaterialSpecLimit(material, stressRow);
      if (!limit) return null;

      const within = tempC >= limit.min && tempC <= limit.max;
      const rangeText = `${limit.min} to ${limit.max} deg C`;
      const materialName = material?.input_description || els.material.value || "selected material";
      const sourceText = `astm_piping_material_specification_webapp row ${limit.rowId}`;
      const asmeStressNoteWarnings = buildNoteMessages(
        stressRow?.notes || material?.notes,
        materialStressLibrary?.note_summaries,
        "ASME stress table"
      ).filter(text => /temperature|exposure|above|below/i.test(text))
        .map(text => ({ level: "warn", text }));

      return {
        ...limit,
        within,
        noteWarnings: asmeStressNoteWarnings,
        message: within
          ? `Material specification temperature limit check passed: ${materialName} design temperature ${tempC} deg C is within ${rangeText} from ${sourceText}.`
          : `Material specification temperature limit failed: ${materialName} design temperature ${tempC} deg C is outside ${rangeText} from ${sourceText}. Select a suitable material/specification or revise the design temperature before calculation.`
      };
    }

    function materialIsApi574Table7Scope(material, stressRow) {
      const text = normalizeText([
        material?.input_description,
        material?.canonical_spec,
        material?.canonical_grade,
        material?.product_form,
        material?.nominal_composition,
        stressRow?.stress_grid
      ].filter(Boolean).join(" "));

      return ["carbon_steel_pipe", "low_alloy_pipe", "api5l_x_grade_pipe"].includes(stressRow?.stress_grid)
        || text.includes("CARBON STEEL")
        || text.includes("LOW ALLOY")
        || text.includes("API 5L")
        || text.includes("A106")
        || text.includes("A53")
        || text.includes("A333")
        || text.includes("A335")
        || text.includes("A672")
        || text.includes("A691")
        || text.includes("IS 1239")
        || text.includes("IS 3589");
    }

    function npsToNumber(nps) {
      const value = String(nps || "").trim();
      if (value.includes("/")) {
        const [wholePart, fractionPart] = value.split(" ");
        const fraction = fractionPart || wholePart;
        const [num, den] = fraction.split("/").map(Number);
        const whole = fractionPart ? Number(wholePart) : 0;
        return whole + (den ? num / den : 0);
      }
      return Number(value);
    }

    function findApi574Table7Row(npsValue) {
      if (!api574Table7Library?.data?.length || !Number.isFinite(npsValue)) return null;
      return api574Table7Library.data.find(row => {
        const covered = row.covered_nps_values || [];
        return covered.some(item => Math.abs(Number(item) - npsValue) < 0.001)
          || (npsValue >= Number(row.nps_min) && npsValue <= Number(row.nps_max));
      }) || null;
    }

    function buildApi574Table7Warnings(input, result) {
      if (!api574Table7Library) {
        return [{ level: "warn", text: "API 574 Table 7 JSON library is not loaded. Minimum alert thickness screening was not performed." }];
      }

      const selectedMaterial = getSelectedMaterial();
      const stressRow = getSelectedStressRow(selectedMaterial);
      const standard = `${api574Table7Library.source_standard || "API 574"} ${api574Table7Library.table || "Table 7"}`;
      const warningMessage = api574Table7Library.warning_message?.message || "Consult with your Engineering Department";
      const npsValue = npsToNumber(input.nps);
      const tempLimit = Number(api574Table7Library.application?.temperature_limit?.max_temperature_c ?? 205);
      const maxNps = Number(api574Table7Library.application?.nps_limit?.max_nps ?? 24);
      const minNps = Number(api574Table7Library.application?.nps_limit?.min_nps ?? 0.5);
      const inMaterialScope = materialIsApi574Table7Scope(selectedMaterial, stressRow);

      if (!inMaterialScope) {
        return [{ level: "warn", text: `${standard}: selected material is outside carbon steel / low-alloy steel Table 7 scope. ${warningMessage}.` }];
      }

      if (!Number.isFinite(npsValue) || npsValue < minNps || npsValue > maxNps) {
        return [{ level: "warn", text: `${standard}: NPS ${input.nps} is outside the listed Table 7 range. ${warningMessage}.` }];
      }

      if (input.temp >= tempLimit) {
        return [{ level: "warn", text: `${standard}: design temperature ${round(input.temp, 0)} deg C is at/above the Table 7 limit of ${round(tempLimit, 0)} deg C. ${warningMessage}.` }];
      }

      const row = findApi574Table7Row(npsValue);
      if (!row) {
        return [{ level: "warn", text: `${standard}: no Table 7 row found for NPS ${input.nps}. ${warningMessage}.` }];
      }

      const structural = Number(row.default_minimum_structural_thickness?.mm);
      const alert = Number(row.minimum_alert_thickness?.mm);
      const messages = [{
        level: "warn",
        text: `${standard}: NPS ${input.nps} reference values are minimum structural thickness ${round(structural)} mm and minimum alert thickness ${round(alert)} mm. Alert thickness is an inspection trigger, not an automatic retirement thickness.`
      }];

      if (Number.isFinite(structural) && result.tm < structural) {
        messages.push({
          level: "bad",
          text: `${standard}: calculated tm ${round(result.tm)} mm is below the Table 7 minimum structural thickness ${round(structural)} mm. ${warningMessage}.`
        });
      } else if (Number.isFinite(structural)) {
        messages.push({
          level: "good",
          text: `${standard}: calculated tm ${round(result.tm)} mm is not below the Table 7 minimum structural thickness ${round(structural)} mm.`
        });
      }

      if (result.schedule && Number.isFinite(alert) && result.schedule.thk < alert) {
        messages.push({
          level: "bad",
          text: `${standard}: selected schedule thickness ${round(result.schedule.thk)} mm is below the Table 7 minimum alert thickness ${round(alert)} mm. ${warningMessage}.`
        });
      }

      return messages;
    }

    function inferServiceCode(input) {
      const text = normalizeText(`${input.notes || ""} ${input.material || ""}`);
      if (input.temp < 0 || text.includes("CRYOGENIC")) return "cryogenic";
      if (text.includes("HYDROGEN") || text.includes(" H2 ")) return "hydrogen";
      if (text.includes("BFW") || text.includes("BOILER FEED")) return "BFW";
      if (text.includes("STEAM") || text.includes("IBR")) return "steam";
      if (text.includes("FLARE")) return "flare";
      if (text.includes("WATER")) return "water";
      if (text.includes("AIR")) return "air";
      return "process";
    }

    function inferMaterialFamily(material, stressRow) {
      const text = normalizeText([
        material?.input_description,
        material?.canonical_spec,
        material?.canonical_grade,
        material?.nominal_composition,
        stressRow?.stress_grid
      ].filter(Boolean).join(" "));

      if (stressRow?.stress_grid === "austenitic_ss_pipe" || text.includes("STAINLESS") || text.includes("A312") || text.includes("A358")) return "stainless_steel";
      if (text.includes("A333") || text.includes("LOW TEMPERATURE")) return "low_temperature_carbon_steel";
      if (stressRow?.stress_grid === "low_alloy_pipe" || text.includes("A335") || text.includes("LOW ALLOY")) return "alloy_steel";
      if (["carbon_steel_pipe", "api5l_x_grade_pipe"].includes(stressRow?.stress_grid) || text.includes("API 5L") || text.includes("A106") || text.includes("IS 1239") || text.includes("IS 3589")) return "carbon_steel";
      return "unknown";
    }

    function pipeSizeRuleMatches(rule, nps) {
      if (rule.all_pipe_sizes) return true;
      if (Number.isFinite(rule.nps_gt) && !(nps > rule.nps_gt)) return false;
      if (Number.isFinite(rule.nps_gte) && !(nps >= rule.nps_gte)) return false;
      if (Number.isFinite(rule.nps_lt) && !(nps < rule.nps_lt)) return false;
      if (Number.isFinite(rule.nps_lte) && !(nps <= rule.nps_lte)) return false;
      return true;
    }

    function levelFromTemperatureRules(rule, deltaC, designTempC) {
      const deltaRules = rule.temperature_delta_rules || [];
      for (const tempRule of deltaRules) {
        if (tempRule.all_temperature_deltas) return tempRule.level;
        if (Number.isFinite(tempRule.delta_lte_c) && deltaC > tempRule.delta_lte_c) continue;
        if (Number.isFinite(tempRule.delta_gt_c) && !(deltaC > tempRule.delta_gt_c)) continue;
        return tempRule.level;
      }

      const designRules = rule.temperature_rules_by_design_temperature || [];
      for (const tempRule of designRules) {
        if (Number.isFinite(tempRule.design_temp_gte_c) && designTempC < tempRule.design_temp_gte_c) continue;
        if (Number.isFinite(tempRule.design_temp_lte_c) && designTempC > tempRule.design_temp_lte_c) continue;
        return tempRule.level;
      }

      return null;
    }

    function evaluateStressCategory(category, nps, deltaC, designTempC) {
      for (const sizeRule of category.pipe_size_rules || []) {
        if (!pipeSizeRuleMatches(sizeRule, nps)) continue;
        const level = levelFromTemperatureRules(sizeRule, deltaC, designTempC);
        if (Number.isFinite(level)) return level;
      }
      return null;
    }

    function getStressLevelDefinition(level) {
      return upfrontStressScreeningLibrary?.analysis_level_definitions?.[`level_${level}`]?.web_app_output
        || `Level ${level}: consult Piping Stress Engineer.`;
    }

    function buildUpfrontStressScreeningWarnings(input, result) {
      if (!upfrontStressScreeningLibrary) {
        return [{ level: "warn", text: "Upfront stress screening rules library is not loaded. Stress-analysis screening was not performed." }];
      }

      const selectedMaterial = getSelectedMaterial();
      const stressRow = getSelectedStressRow(selectedMaterial);
      const nps = npsToNumber(input.nps);
      const deltaC = Math.abs(input.temp - (upfrontStressScreeningLibrary.design_reference_constants?.ambient_temperature_for_flexibility_analysis_c ?? 21));
      const pressureBar = input.P * 10;
      const serviceCode = inferServiceCode(input);
      const materialFamily = inferMaterialFamily(selectedMaterial, stressRow);
      const messages = [];
      const matched = [];
      let highestLevel = 1;

      const globals = upfrontStressScreeningLibrary.global_messages || {};
      messages.push({ level: "warn", text: `Stress screening scope: ${globals.thickness_outside_stress_spec || upfrontStressScreeningLibrary.web_app_result_mapping?.outside_scope?.user_message}` });

      const codeBasis = serviceCode === "steam" || serviceCode === "BFW"
        ? "IBR / ASME B31.1 for Steam and BFW piping."
        : "ASME B31.3 Process Piping for process/utility piping unless a more specific project, statutory, or licensor requirement governs.";
      messages.push({ level: "warn", text: `Upfront stress screening: inferred service '${serviceCode}'. Code basis to verify: ${codeBasis}` });

      if ((serviceCode === "steam" || serviceCode === "BFW") && nps > 2) {
        highestLevel = Math.max(highestLevel, 2);
        matched.push("IBR / steam / BFW line above 2 inch");
      }

      const categories = upfrontStressScreeningLibrary.stress_critical_line_list_rules || [];
      const defaultCategory = categories.find(item => item.category_code === "M");
      const stainlessCategory = categories.find(item => item.category_code === "D");
      const cryogenicCategory = categories.find(item => item.category_code === "H");
      const categoriesToEvaluate = [defaultCategory];
      if (materialFamily === "stainless_steel") categoriesToEvaluate.push(stainlessCategory);
      if (serviceCode === "cryogenic" || input.temp < 0) categoriesToEvaluate.push(cryogenicCategory);

      categoriesToEvaluate.filter(Boolean).forEach(category => {
        const level = evaluateStressCategory(category, nps, deltaC, input.temp);
        if (Number.isFinite(level)) {
          highestLevel = Math.max(highestLevel, level);
          matched.push(`${category.category_code} - ${category.category_name}: Level ${level}`);
          (category.additional_warnings || []).forEach(text => messages.push({ level: "warn", text }));
        }
      });

      if (materialFamily === "low_temperature_carbon_steel" && input.temp < -45) {
        highestLevel = Math.max(highestLevel, 3);
        matched.push("LTCS below -45 degC");
        messages.push({ level: "bad", text: "For LTCS material usage below -45 degC, impact test requirement and stress-ratio verification shall be checked with Materials group." });
      }

      if (pressureBar > (upfrontStressScreeningLibrary.design_reference_constants?.bourdon_effect_pressure_threshold_bar ?? 20)) {
        messages.push({ level: "warn", text: `Bourdon effect warning: design pressure ${round(pressureBar, 2)} bar is above 20 bar. This is a stress/flexibility modeling warning, not a pressure-thickness formula.` });
      }

      const governingThickness = result.schedule?.thk || result.requiredNominal;
      const diameterThicknessRatio = governingThickness > 0 ? input.D / governingThickness : null;
      if (diameterThicknessRatio >= 100) {
        messages.push({ level: "warn", text: `Large D/t warning: D/t is approximately ${round(diameterThicknessRatio, 1)}. SIFs at bends and branches may require Stress Engineer review.` });
      }

      if (nps >= 12) {
        messages.push({ level: "warn", text: "Seismic analysis screening: project rule flags seismic analysis for lines 12 inch and above." });
      }

      if (nps >= 18 && !["air", "water"].includes(serviceCode)) {
        messages.push({ level: "warn", text: "Flange leakage screening: project rule flags flange leak check for 18 inch and above lines except air and water lines." });
      }

      if (nps <= 1.5) {
        messages.push({ level: "warn", text: upfrontStressScreeningLibrary.evaluation_logic?.small_bore_policy || "Small bore lines are not automatically cleared; consult Stress Engineer where service, vibration, temperature, PSV, or safety criticality exists." });
      }

      const severity = highestLevel >= 3 ? "bad" : highestLevel >= 2 ? "warn" : "good";
      messages.unshift({
        level: severity,
        text: `Upfront stress screening result: ${getStressLevelDefinition(highestLevel)} Matched basis: ${matched.length ? matched.join("; ") : "default visual screening only"}.`
      });
      messages.push({ level: "warn", text: globals.minimum_thickness_not_final_pipe_acceptance || "Minimum pressure thickness alone is not final pipe acceptability." });

      return messages;
    }

    function applyScheduleLibraryAutomation(material, stressRow, messages = []) {
      const preferredSource = preferredScheduleSourceForMaterial(material, stressRow);
      if (!preferredSource || els.scheduleSource.value === preferredSource) return;

      els.scheduleSource.value = preferredSource;
      setActiveScheduleLibrary();
      messages.push(`Schedule library: ${scheduleSourceLabels[preferredSource]} selected automatically for the chosen material.`);
    }

    function lookupByTemperature(grid, values, tempC) {
      if (!Array.isArray(grid) || !Array.isArray(values) || grid.length !== values.length) {
        throw new Error("Temperature grid and value table do not match.");
      }

      const points = grid.map((label, index) => ({
        temp: label === "min_to_40" ? 40 : Number(label),
        value: values[index]
      })).filter(point => Number.isFinite(point.temp));

      if (!points.length) throw new Error("No usable temperature points found.");

      if (tempC <= points[0].temp) {
        if (typeof points[0].value !== "number") throw new Error("Value unavailable at selected temperature.");
        return points[0].value;
      }

      for (let i = 0; i < points.length - 1; i++) {
        const p1 = points[i];
        const p2 = points[i + 1];
        if (tempC === p1.temp && typeof p1.value === "number") return p1.value;
        if (tempC > p1.temp && tempC <= p2.temp) {
          if (typeof p1.value !== "number" || typeof p2.value !== "number") {
            throw new Error("Value unavailable in selected temperature range.");
          }
          return interpolate(tempC, p1.temp, p1.value, p2.temp, p2.value);
        }
      }

      const last = points[points.length - 1];
      if (tempC >= last.temp && typeof last.value === "number") return last.value;
      throw new Error("Temperature is outside the automated lookup range.");
    }

    function buildNoteMessages(notes, noteSummaries, prefix) {
      if (!Array.isArray(notes) || !notes.length) return [];

      return notes.map(note => {
        const key = String(note);
        const summary = noteSummaries?.[key];
        return summary
          ? `${prefix} Note ${key}: ${summary}`
          : `${prefix} Note ${key}: note text is not available in the local JSON. Verify against the controlled ASME code edition.`;
      });
    }

    function lookupStress(material, stressRow, tempC) {
      if (!materialStressLibrary || !stressRow?.stress_grid || !Array.isArray(stressRow.stress_mpa)) {
        throw new Error("No allowable stress row is available for this material.");
      }

      const grid = materialStressLibrary.temperature_grids[stressRow.stress_grid];
      const warnings = [];
      let stress;

      if (stressRow.stress_grid === "api5l_x_grade_pipe" && tempC > 200 && tempC <= Number(stressRow.max_use_temp_c)) {
        const index200 = grid.findIndex(value => Number(value) === 200);
        stress = stressRow.stress_mpa[index200];
        warnings.push("API 5L X-grade stress grid stops at 200 °C while the row max use temperature is 204 °C. Verify use of the 200 °C stress value with the responsible engineer.");
      } else {
        stress = lookupByTemperature(grid, stressRow.stress_mpa, tempC);
      }

      if (Number.isFinite(Number(stressRow.max_use_temp_c)) && tempC > Number(stressRow.max_use_temp_c)) {
        warnings.push(`Design temperature exceeds listed max use temperature ${stressRow.max_use_temp_c} °C for selected stress row.`);
      }
      if (material.status && !String(material.status).startsWith("listed")) {
        warnings.push(material.engineering_warning || `Material status is ${material.status}; verify before calculation.`);
      }
      warnings.push(...buildNoteMessages(stressRow.notes, materialStressLibrary.note_summaries, "ASME stress table"));

      return {
        value: stress,
        source: stressRow.source_location || material.source_location || "material stress library",
        warnings
      };
    }

    function inferYCategory(material, stressRow) {
      const direct = findYAlias(material?.input_description);
      if (direct) return direct;

      if (stressRow?.stress_grid === "austenitic_ss_pipe") return "austenitic_steel";
      if (["carbon_steel_pipe", "low_alloy_pipe", "api5l_x_grade_pipe"].includes(stressRow?.stress_grid)) return "ferritic_steel";
      return null;
    }

    function findYAlias(materialName) {
      const normalizedMaterial = normalizeText(materialName);
      const aliases = yFactorLibrary?.material_category_aliases || [];
      const match = aliases.find(item => {
        const names = [item.input_pattern, ...(item.normalized_examples || [])].map(normalizeText);
        return names.includes(normalizedMaterial);
      });
      return match?.auto_y_lookup_allowed === false ? null : match?.assigned_y_category_id || null;
    }

    function lookupYFactor(categoryId, tempC) {
      if (!yFactorLibrary || !categoryId) throw new Error("Y factor category could not be resolved.");
      const row = yFactorLibrary.y_factor_table.find(item => item.category_id === categoryId);
      if (!row) throw new Error(`Y factor category not found: ${categoryId}`);
      return lookupByTemperature(row.temperature_grid_c, row.y_values, tempC);
    }

    function resolveWGroup(materialName, stressRow) {
      const normalizedMaterial = normalizeText(materialName);
      const aliases = wFactorLibrary?.material_category_aliases || {};

      for (const item of Object.values(aliases)) {
        const names = [...(item.aliases || []), ...(item.normalized_aliases || [])].map(normalizeText);
        if (names.includes(normalizedMaterial)) {
          return item.w_group_id || item.default_w_group_id || item.normalized_tempered_w_group_id || null;
        }
      }

      if (stressRow?.stress_grid === "austenitic_ss_pipe") return "austenitic_3xx_and_n088xx";
      if (stressRow?.stress_grid === "low_alloy_pipe") return "crmo";
      if (["carbon_steel_pipe", "api5l_x_grade_pipe"].includes(stressRow?.stress_grid)) return "carbon_steel";
      return null;
    }

    function lookupWFactor(materialName, stressRow, tempC, pipeType) {
      if (pipeType !== "welded") {
        return { value: 1, reason: "Seamless pipe selected; W set to 1.0." };
      }

      if (!wFactorLibrary) throw new Error("W factor library is not loaded.");
      const groupId = resolveWGroup(materialName, stressRow);
      if (!groupId) throw new Error("W factor group could not be resolved.");

      const row = wFactorLibrary.w_factor_table.find(item => item.id === groupId);
      if (!row) throw new Error(`W factor row not found: ${groupId}`);
      const value = lookupByTemperature(row.temperature_values_degC, row.w_values, tempC);
      return {
        value,
        reason: `${row.group || groupId} W factor lookup.`,
        warnings: buildNoteMessages(row.notes, wFactorLibrary.note_summaries, "ASME W factor table")
      };
    }

    function getQualityFactor(pipeType) {
      if (pipeType === "seamless") {
        return { value: 1, reason: "Seamless pipe selected; E set to 1.0." };
      }
      return {
        value: 0.85,
        reason: "Welded pipe selected; E auto-filled as a conservative default. Verify against PMS, pipe spec, weld type and NDE."
      };
    }

    function applyAutoFillFactors() {
      const messages = [];
      const material = getSelectedMaterial();
      const tempC = Number(els.temperature.value);
      const pipeType = els.pipeType.value;

      automationMessages = [];
      populateMaterialVariants(material);

      if (!material) {
        els.autoFillStatus.textContent = "Select a listed material and valid design temperature to auto-fill S, E, W and Y.";
        return;
      }

      const stressRow = getSelectedStressRow(material);
      applyScheduleLibraryAutomation(material, stressRow, messages);

      const materialKey = material.input_description || "";
      const isNewMaterial = materialKey !== lastMillToleranceMaterial;
      if (isNewMaterial) {
        if (isA358Material(material, stressRow)) {
          els.millToleranceMode.value = "fixed_mm";
          els.tolerance.value = "0.3";
          messages.push("Mill tolerance: ASTM A358 selected. Fixed 0.3 mm wall-thickness deduction applied per ASTM A358/A358M-15 Clause 8.1.4. This replaces the usual percentage basis.");
        } else if (lastMillToleranceMaterial) {
          els.millToleranceMode.value = "percent";
          els.tolerance.value = "12.5";
          messages.push("Mill tolerance: percentage basis restored at 12.5%. Verify the governing material specification and project PMS.");
        }
        lastMillToleranceMaterial = materialKey;
      }
      syncMillToleranceControl();
      els.millToleranceStatus.textContent = isA358Material(material, stressRow) ? "A358 Auto" : "Auto";

      if (!Number.isFinite(tempC)) {
        els.autoFillStatus.textContent = `${messages.join(" ")} Select a valid design temperature to auto-fill S, E, W and Y.`;
        return;
      }

      const quality = getQualityFactor(pipeType);
      els.quality.value = round(quality.value, 3);
      messages.push(`E: ${quality.reason}`);

      try {
        els.stress.value = "";
        els.stress.placeholder = "";
        els.stress.classList.remove("auto-unavailable");
        const stress = lookupStress(material, stressRow, tempC);
        els.stress.value = round(stress.value, 3);
        messages.push(`S: ${round(stress.value, 3)} MPa from ${stress.source}.`);
        automationMessages.push(...stress.warnings.map(text => ({ level: "warn", text })));
      } catch (error) {
        els.stress.value = "";
        els.stress.placeholder = "N/A";
        els.stress.classList.add("auto-unavailable");
        messages.push(`S: ${error.message} Enter S manually.`);
        automationMessages.push({ level: "bad", text: `Allowable stress was not auto-filled: ${error.message}` });
      }

      try {
        const yCategory = inferYCategory(material, stressRow);
        const y = lookupYFactor(yCategory, tempC);
        els.yFactor.value = round(y, 3);
        messages.push(`Y: ${round(y, 3)} from ${yCategory || "unresolved category"}.`);
      } catch (error) {
        messages.push(`Y: ${error.message} Enter Y manually.`);
        automationMessages.push({ level: "warn", text: `Y coefficient was not auto-filled: ${error.message}` });
      }

      try {
        const w = lookupWFactor(material.input_description, stressRow, tempC, pipeType);
        els.wFactor.value = round(w.value, 3);
        messages.push(`W: ${round(w.value, 3)}. ${w.reason}`);
        automationMessages.push(...(w.warnings || []).map(text => ({ level: "warn", text })));
      } catch (error) {
        els.wFactor.value = "1.000";
        messages.push(`W: ${error.message} Defaulted to 1.000 for manual review.`);
        automationMessages.push({ level: "warn", text: `W factor needs review: ${error.message}` });
      }

      if (material.status && !String(material.status).startsWith("listed")) {
        automationMessages.push({
          level: "bad",
          text: material.engineering_warning || `Selected material status is ${material.status}. Do not use for final ASME calculation without approval.`
        });
      }

      els.autoFillStatus.textContent = messages.join(" ");
    }

    function setActiveScheduleLibrary() {
      activeScheduleSource = els.scheduleSource.value;
      pipeLibrary = scheduleLibraries[activeScheduleSource] || fallbackPipeLibrary;
      initNps(els.nps.value || sampleCase.nps);
    }

    function initNps(selectedSize = "18") {
      els.nps.innerHTML = "";
      npsDisplayOrder.filter(size => pipeLibrary[size]).forEach(size => {
        const option = document.createElement("option");
        option.value = size;
        option.textContent = displayNps(size);
        if (size === selectedSize) option.selected = true;
        els.nps.appendChild(option);
      });
      if (!pipeLibrary[els.nps.value] && pipeLibrary[sampleCase.nps]) {
        els.nps.value = sampleCase.nps;
      }
      const entry = pipeLibrary[els.nps.value];
      if (entry) els.od.value = entry.od;
    }

    function toNumber(input, name) {
      const value = Number(input.value);
      if (!Number.isFinite(value)) throw validationError(`${name} is not a valid number.`, input.id);
      return value;
    }

    function validationError(message, fieldId, assessmentWarnings = []) {
      const error = new Error(message);
      error.fieldId = fieldId;
      error.isInputValidation = true;
      error.assessmentWarnings = assessmentWarnings;
      return error;
    }

    function checkRange(value, min, max, name, unit, fieldId) {
      if (value < min || value > max) {
        const unitText = unit ? ` ${unit}` : "";
        throw validationError(`${name} is outside the allowed range. Enter ${min} to ${max}${unitText}.`, fieldId);
      }
    }

    function clearInputGuidance() {
      document.querySelectorAll(".smart-row.input-invalid").forEach(row => row.classList.remove("input-invalid"));
      if (els.inputToast) {
        els.inputToast.classList.remove("show");
        els.inputToast.setAttribute("aria-hidden", "true");
      }
    }

    function showInputGuidance(message, fieldId) {
      const field = fieldId ? document.getElementById(fieldId) : null;
      const row = field ? field.closest(".smart-row") : null;

      document.querySelectorAll(".smart-row.input-invalid").forEach(item => item.classList.remove("input-invalid"));
      if (row) row.classList.add("input-invalid");

      els.inputToastMessage.textContent = message;
      els.inputToast.classList.add("show");
      els.inputToast.setAttribute("aria-hidden", "false");

      window.clearTimeout(inputToastTimer);
      inputToastTimer = window.setTimeout(() => {
        els.inputToast.classList.remove("show");
        els.inputToast.setAttribute("aria-hidden", "true");
      }, 1500);
    }

    function pressureToMpa(value, unit) {
      const factors = {
        kgcm2: 0.0980665,
        bar: 0.1,
        mpa: 1,
        kpa: 0.001,
        psi: 0.00689476
      };
      return value * factors[unit];
    }

    function syncPressureInputLimits() {
      const range = pressureInputRanges[els.pressureUnit.value] || pressureInputRanges.mpa;
      els.pressure.min = range.min;
      els.pressure.max = range.max;
    }

    function round(value, decimals = 2) {
      return Number(value).toFixed(decimals);
    }

    function selectSchedule(nps, requiredNominal, source = activeScheduleSource) {
      const library = scheduleLibraries[source] || fallbackPipeLibrary;
      const entry = library[nps];
      if (!entry) return null;
      const sorted = [...entry.schedules].sort((a, b) => a.thk - b.thk);
      const schedule = sorted.find(item => item.thk >= requiredNominal) || null;
      return schedule ? { ...schedule, librarySource: source, libraryLabel: scheduleSourceLabels[source] } : null;
    }

    function getInputs() {
      const selectedMaterial = getSelectedMaterial();
      const P_input = toNumber(els.pressure, "Design pressure");
      const unit = els.pressureUnit.value;
      const P = pressureToMpa(P_input, unit);
      const D = toNumber(els.od, "Outside diameter");
      const E = toNumber(els.quality, "Quality factor");
      const W = toNumber(els.wFactor, "W factor");
      const Y = toNumber(els.yFactor, "Y factor");
      const c = toNumber(els.corrosion, "Corrosion allowance");
      const millTolerance = getMillToleranceDetails();
      const temp = toNumber(els.temperature, "Design temperature");

      const pressureRange = pressureInputRanges[unit] || pressureInputRanges.mpa;

      checkRange(P_input, pressureRange.min, pressureRange.max, "Design pressure", pressureRange.unit, "pressure");
      checkRange(temp, -196, 800, "Design temperature", "deg C", "temperature");
      checkRange(D, 1, 3000, "Outside diameter", "mm", "od");
      checkRange(E, 0.01, 1, "Quality factor E", "", "quality");
      checkRange(W, 0.01, 1, "W factor", "", "wFactor");
      checkRange(Y, 0, 1, "Y coefficient", "", "yFactor");
      checkRange(c, 0, 25, "Corrosion allowance", "mm", "corrosion");

      if (selectedMaterial && selectedMaterial.status && !String(selectedMaterial.status).startsWith("listed")) {
        throw validationError(`${selectedMaterial.input_description} is not listed for automatic ASME B31.3 allowable stress selection in the local library. Use only after approved unlisted-material stress basis is documented.`, "material");
      }

      const selectedStressRow = getSelectedStressRow(selectedMaterial);
      const materialSpecCheck = evaluateMaterialSpecificationTemperature(selectedMaterial, selectedStressRow, temp);
      if (materialSpecCheck && !materialSpecCheck.within) {
        throw validationError(materialSpecCheck.message, "temperature", materialSpecCheck.noteWarnings);
      }

      const S = toNumber(els.stress, "Allowable stress");
      checkRange(S, 1, 1000, "Allowable stress", "MPa", "stress");
      if (P <= 0 || D <= 0 || S <= 0 || E <= 0 || W <= 0) {
        throw validationError("Pressure, OD, S, E and W must be greater than zero.", "pressure");
      }

      const preferredScheduleSource = preferredScheduleSourceForMaterial(selectedMaterial, selectedStressRow);

      return {
        P_input,
        unit,
        P,
        temp,
        D,
        S,
        E,
        W,
        Y,
        c,
        millTolerance,
        tolPercent: millTolerance.mode === "percent" ? millTolerance.value : null,
        nps: els.nps.value,
        scheduleSource: scheduleSourceLabels[activeScheduleSource],
        scheduleSourceKey: activeScheduleSource,
        preferredScheduleSource,
        materialSpecCheck,
        material: els.material.value,
        pipeType: els.pipeType.value,
        context: {
          objective: els.calcObjective.value.trim(),
          projectNo: els.projectNo.value.trim(),
          lineNo: els.lineNo.value.trim()
        },
        notes: els.notes.value.trim()
      };
    }

    function calculate(options = {}) {
      try {
        if (options.showPopup) clearInputGuidance();
        const input = getInputs();
        const denominator = 2 * ((input.S * input.E * input.W) + (input.P * input.Y));
        const t = (input.P * input.D) / denominator;
        const dBySix = input.D / 6;

        const warnings = [];
        const selectedMaterial = getSelectedMaterial();
        const selectedStressRow = getSelectedStressRow(selectedMaterial);
        if (isA358Material(selectedMaterial, selectedStressRow)) {
          warnings.push(input.millTolerance.mode === "fixed_mm"
            ? { level: "good", text: `ASTM A358/A358M-15 Clause 8.1.4 basis applied: minimum wall thickness is nominal thickness minus ${formatMillToleranceValue(input.millTolerance.value, input.millTolerance.mode)} mm. Required nominal thickness is therefore tm + ${formatMillToleranceValue(input.millTolerance.value, input.millTolerance.mode)} mm.` }
            : { level: "warn", text: "ASTM A358 material selected, but mill tolerance was manually changed to percentage mode. Verify that this intentional override is permitted by the governing material specification and project PMS." });
        }

        if (t >= dBySix) {
          warnings.push({ level: "bad", text: thinWallFailureMessage });
          renderThinWallFailure(thinWallFailureMessage, warnings);
          lastResult = null;
          clearInputGuidance();
          return;
        }

        const tm = t + input.c;
        const requiredNominal = requiredNominalFromMillTolerance(tm, input.millTolerance);
        const ratio = input.P / (input.S * input.E);
        let schedule = selectSchedule(input.nps, requiredNominal, input.scheduleSourceKey);
        let scheduleSourceUsed = input.scheduleSourceKey;
        let scheduleFallbackWarning = null;
        if (!schedule && input.preferredScheduleSource === "b3619" && input.scheduleSourceKey === "b3619") {
          const fallbackSchedule = selectSchedule(input.nps, requiredNominal, "b3610");
          if (fallbackSchedule) {
            schedule = fallbackSchedule;
            scheduleSourceUsed = "b3610";
            scheduleFallbackWarning = "No suitable B36.19M stainless schedule found. Fallback selected from ASME B36.10M steel schedule library. Verify project PMS/client specification before final use.";
          }
        }
        let severity = "good";

        warnings.push({ level: "good", text: "Thin-wall check passed: calculated pressure thickness t is less than D/6." });
        if (input.materialSpecCheck?.within) {
          warnings.push({ level: "good", text: input.materialSpecCheck.message });
        }

        if (ratio > 0.385) {
          warnings.push({ level: "bad", text: "P/(S × E) exceeds 0.385. Special consideration is required." });
          severity = "bad";
        } else {
          warnings.push({ level: "good", text: "Pressure ratio check passed: P/(S × E) is within 0.385." });
        }

        if (!schedule) {
          warnings.push({ level: "bad", text: "No available schedule in the checked schedule libraries is equal to or higher than the required nominal thickness." });
          severity = "bad";
        } else {
          if (scheduleFallbackWarning) {
            warnings.push({ level: "warn", text: scheduleFallbackWarning });
            severity = "warn";
          }
          warnings.push({ level: "good", text: `Nearest higher standard thickness found: ${schedule.sch} at ${round(schedule.thk)} mm from ${schedule.libraryLabel || scheduleSourceLabels[scheduleSourceUsed]}.` });
        }

        const api574Warnings = buildApi574Table7Warnings(input, { tm, schedule });
        api574Warnings.forEach(message => {
          warnings.push(message);
          if (message.level === "bad") severity = "bad";
          if (message.level === "warn" && severity !== "bad") severity = "warn";
        });

        const stressScreeningWarnings = buildUpfrontStressScreeningWarnings(input, { requiredNominal, schedule });
        stressScreeningWarnings.forEach(message => {
          warnings.push(message);
          if (message.level === "bad") severity = "bad";
          if (message.level === "warn" && severity !== "bad") severity = "warn";
        });

        automationMessages.forEach(message => warnings.push(message));
        warnings.push({ level: "warn", text: "Auto-filled values reduce typing effort, but final S, E, W and Y shall still be verified from the controlled ASME B31.3 edition, project PMS and approved design basis." });
        warnings.push({ level: "warn", text: "IBR applicability, B31.1 versus B31.3 basis, flexibility, branch reinforcement, bends, NDE, PWHT and hydrotest are outside this V1 calculation." });

        lastResult = {
          input,
          t,
          tm,
          requiredNominal,
          dBySix,
          ratio,
          schedule,
          scheduleSourceUsed,
          scheduleFallbackWarning,
          warnings,
          severity,
          generatedAt: new Date().toLocaleString()
        };

        renderResult(lastResult);
        if (options.syncScenarioBase) syncScenarioBaseFromResult(lastResult);
        clearInputGuidance();
      } catch (err) {
        renderError(err);
        if (options.showPopup) {
          showInputGuidance(`Please correct input data: ${err.message}`, err.fieldId);
        }
      }
    }

    function setResultStatus(text, state = "waiting", icon = "•", detail = "") {
      const states = ["state-waiting", "state-good", "state-warn", "state-bad", "state-info"];
      els.statusBadge.textContent = text;
      els.statusDetail.textContent = detail;
      els.statusDetail.classList.toggle("show", Boolean(detail));
      els.statusIcon.textContent = icon;
      els.resultStatusBanner.classList.remove(...states);
      els.resultStatusBanner.classList.add(`state-${state}`);
    }

    function renderResult(result) {
      els.tPressure.textContent = round(result.t);
      els.tmValue.textContent = round(result.tm);
      els.nominalValue.textContent = round(result.requiredNominal);
      els.dBySix.textContent = round(result.dBySix);
      els.scheduleValue.textContent = result.schedule ? result.schedule.sch : "Not found";
      els.scheduleThickness.textContent = result.schedule ? round(result.schedule.thk) : "0.00";

      els.scheduleMetric.classList.remove("good", "warn", "bad");
      els.scheduleMetric.classList.add(result.schedule ? "good" : "bad");
      if (result.severity === "bad") {
        setResultStatus("Engineering review required", "warn", "!");
      } else {
        setResultStatus("Preliminary pass", "good", "✓", "Review calculated thickness and selected schedule.");
      }

      els.warningsBox.innerHTML = buildWarningAssessmentTable(result.warnings);

      els.reportBox.innerHTML = buildProfessionalReportHTML(result);
      renderFlowPanel(result);
      renderPipeSection(result);
    }

    function renderThinWallFailure(message, warnings) {
      setResultStatus("Thin-wall check failed", "bad", "!", message);
      clearResultValues();
      els.warningsBox.innerHTML = buildWarningAssessmentTable(warnings);
      els.reportBox.innerHTML = buildCalculationStoppedReportHTML(message);
    }

    function renderPipeSection(result) {
      const outerRadius = 104;
      const centerX = 240;
      const centerY = 160;
      const guideEndX = 340;
      const arrowX = 354;
      const shownWall = result.schedule ? result.schedule.thk : result.requiredNominal;
      const visualWall = Math.max(8, Math.min(34, (shownWall / result.input.D) * outerRadius * 2));
      const innerRadius = Math.max(40, outerRadius - visualWall);
      const innerY = round(centerY + innerRadius, 1);
      const outerY = centerY + outerRadius;
      const innerArrowTopY = Math.max(centerY + innerRadius - 24, centerY + innerRadius - 10);
      const outerArrowBottomY = Math.min(centerY + outerRadius + 26, centerY + outerRadius + 18);

      els.pipeInnerCircle.setAttribute("r", round(innerRadius, 1));
      els.sectionOdLabel.textContent = `OD ${round(result.input.D)} mm`;
      els.sectionRequiredLabel.textContent = `${round(result.requiredNominal)} mm`;
      els.sectionScheduleLabel.textContent = result.schedule
        ? `${result.schedule.sch} · ${round(result.schedule.thk)} mm`
        : "Schedule not found";
      setLine(els.sectionInnerGuide, centerX, innerY, guideEndX, innerY);
      setLine(els.sectionOuterGuide, centerX, outerY, guideEndX, outerY);
      setLine(els.sectionInnerArrow, arrowX, innerArrowTopY, arrowX, innerY);
      setLine(els.sectionOuterArrow, arrowX, outerArrowBottomY, arrowX, outerY);
      els.sectionInnerArrowHead.setAttribute("d", arrowPath(arrowX, innerY, "down"));
      els.sectionOuterArrowHead.setAttribute("d", arrowPath(arrowX, outerY, "up"));
    }

    function setLine(line, x1, y1, x2, y2) {
      line.setAttribute("x1", x1);
      line.setAttribute("y1", y1);
      line.setAttribute("x2", x2);
      line.setAttribute("y2", y2);
    }

    function arrowPath(x, y, direction) {
      return direction === "down"
        ? `M${x - 10} ${round(y - 12, 1)} L${x} ${round(y, 1)} L${x + 10} ${round(y - 12, 1)}`
        : `M${x - 10} ${round(y + 12, 1)} L${x} ${round(y, 1)} L${x + 10} ${round(y + 12, 1)}`;
    }

    function renderFlowPanel(result) {
      const corrosionAdd = result.input.c;
      const toleranceAdd = result.requiredNominal - result.tm;
      const maxThickness = Math.max(result.requiredNominal, result.schedule ? result.schedule.thk : 0, 1);
      const barHeight = value => `${Math.max(8, Math.min(100, (value / maxThickness) * 100))}%`;

      els.flowPressureThickness.textContent = round(result.t);
      els.flowAfterCorrosion.textContent = round(result.tm);
      els.flowTolerancePct.textContent = result.input.millTolerance.flowLabel;
      els.flowToleranceBasis.textContent = result.input.millTolerance.formula;
      els.flowRequiredNominal.textContent = round(result.requiredNominal);
      els.flowScheduleName.textContent = result.schedule ? result.schedule.sch : "Not found";
      els.flowScheduleThickness.textContent = result.schedule ? round(result.schedule.thk) : "0.00";

      els.flowBarPressureValue.textContent = round(result.t);
      els.flowBarCorrosionValue.textContent = `+${round(corrosionAdd)}`;
      els.flowBarToleranceValue.textContent = `+${round(toleranceAdd)}`;
      els.flowBarFinalValue.textContent = round(result.requiredNominal);

      els.flowBarPressure.style.setProperty("--bar-height", barHeight(result.t));
      els.flowBarCorrosion.style.setProperty("--bar-height", barHeight(corrosionAdd));
      els.flowBarTolerance.style.setProperty("--bar-height", barHeight(toleranceAdd));
      els.flowBarFinal.style.setProperty("--bar-height", barHeight(result.requiredNominal));
    }

    function renderError(error) {
      const message = typeof error === "string" ? error : error.message;
      const noteWarnings = Array.isArray(error?.assessmentWarnings) ? error.assessmentWarnings : [];
      setResultStatus("Input error", "bad", "!");
      clearResultValues();
      els.warningsBox.innerHTML = buildWarningAssessmentTable([{ level: "bad", text: message }, ...noteWarnings]);
    }

    function buildWarningAssessmentTable(warnings) {
      const rows = warnings.map(classifyWarningAssessment);
      return `
        <div class="assessment-table-wrap">
          <table class="assessment-table">
            <thead>
              <tr>
                <th><strong>Category</strong></th>
                <th><strong>Assessment</strong></th>
                <th><strong>Status</strong></th>
                <th><strong>Remarks / Action</strong></th>
              </tr>
            </thead>
            <tbody>
              ${rows.map(row => `
                <tr>
                  <td>${escapeHtml(row.category)}</td>
                  <td>${escapeHtml(row.assessment)}</td>
                  <td><span class="assessment-status ${row.statusClass}">${escapeHtml(row.status)}</span></td>
                  <td>${formatAssessmentRemark(row.remark)}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      `;
    }

    function classifyWarningAssessment(warning) {
      const text = String(warning.text || "");
      const lower = text.toLowerCase();
      let category = "Engineering Review";
      let assessment = "General check";

      if (lower.includes("thin-wall")) {
        category = "Pressure Thickness";
        assessment = "Thin-wall check";
      } else if (lower.includes("pressure ratio") || lower.includes("p/(s")) {
        category = "Pressure Thickness";
        assessment = "Pressure ratio check";
      } else if (lower.includes("nearest higher standard thickness")) {
        category = "Pressure Thickness";
        assessment = "Nearest higher standard thickness";
      } else if (lower.includes("no available schedule") || lower.includes("schedule found") || lower.includes("fallback selected")) {
        category = "Schedule Selection";
        assessment = "Schedule availability";
      } else if (lower.includes("api 574") || lower.includes("table 7")) {
        category = lower.includes("temperature") ? "Temperature Limit" : "Inspection Screening";
        assessment = "API 574 Table 7 check";
      } else if (lower.includes("material specification temperature limit")) {
        category = "Temperature Limit";
        assessment = "ASTM material specification limit";
      } else if (lower.includes("asme stress table note")) {
        category = "Material Limitation";
        assessment = "Applicable ASME material note";
      } else if (lower.includes("applicable astm material guide note")) {
        category = "Material Limitation";
        assessment = "Applicable ASTM material note";
      } else if (lower.includes("upfront stress screening result")) {
        category = "Stress Screening";
        assessment = "Upfront stress screening result";
      } else if (lower.includes("matched basis")) {
        category = "Stress Screening";
        assessment = "Stress screening matched basis";
      } else if (lower.includes("stress screening scope")) {
        category = "Stress Screening";
        assessment = "Stress screening scope";
      } else if (lower.includes("inferred service")) {
        category = "Code Basis";
        assessment = "Inferred service";
      } else if (lower.includes("code basis") || lower.includes("asme b31.1") || lower.includes("asme b31.3 process piping")) {
        category = "Code Basis";
        assessment = "Applicable code basis to verify";
      } else if (lower.includes("bourdon")) {
        category = "Flexibility / Stress";
        assessment = "Bourdon effect screening";
      } else if (lower.includes("large d/t")) {
        category = "Flexibility / Stress";
        assessment = "Large D/t screening";
      } else if (lower.includes("seismic")) {
        category = "Seismic";
        assessment = "Seismic analysis screening";
      } else if (lower.includes("flange")) {
        category = "Flange Leakage";
        assessment = "Flange leakage screening";
      } else if (lower.includes("minimum pressure thickness alone")) {
        category = "Final Acceptance";
        assessment = "Pipe acceptability limitation";
      } else if (lower.includes("asme stress table note")) {
        category = "Material Notes";
        assessment = text.match(/ASME stress table Note \d+/i)?.[0] || "ASME stress table note";
      } else if (lower.includes("auto-filled values")) {
        category = "Input Governance";
        assessment = "Auto-filled values check";
      } else if (lower.includes("ibr applicability") || lower.includes("outside this v1 calculation")) {
        category = "Calculation Scope";
        assessment = "V1 calculation limitation";
      } else if (lower.includes("input") || lower.includes("outside the allowed range")) {
        category = "Input Data";
        assessment = "Input validation";
      }

      const status = warningStatusForTable(warning, text);
      return { category, assessment, status: status.label, statusClass: status.className, remark: cleanAssessmentRemark(text) };
    }

    function warningStatusForTable(warning, text) {
      const levelMatch = text.match(/Level\s+([123])/i);
      if (levelMatch) {
        return { label: `LEVEL ${levelMatch[1]}`, className: `level-${levelMatch[1]}` };
      }
      if (warning.level === "good") return { label: "PASS", className: "pass" };
      if (warning.level === "bad") return { label: "ACTION", className: "action" };
      if (warning.level === "info") return { label: "INFO", className: "info" };
      return { label: "WARNING", className: "warning" };
    }

    function cleanAssessmentRemark(text) {
      return String(text || "")
        .replace(/^Upfront stress screening result:\s*/i, "")
        .replace(/^Stress screening scope:\s*/i, "")
        .replace(/^Upfront stress screening:\s*/i, "")
        .trim();
    }

    function formatAssessmentRemark(text) {
      return escapeHtml(text).replace(/`([^`]+)`/g, "<code>$1</code>");
    }

    function reportStatusLabel(severity) {
      if (severity === "bad") return { label: "ACTION REQUIRED", className: "report-action" };
      if (severity === "warn") return { label: "ENGINEERING REVIEW", className: "report-warning" };
      return { label: "PRELIMINARY PASS", className: "report-pass" };
    }

    function getScheduleLibraryLabel(result) {
      return result.schedule?.libraryLabel
        || scheduleSourceLabels[result.scheduleSourceUsed]
        || result.input?.scheduleSource
        || "Not available";
    }

    function getScheduleMargin(result) {
      if (!result.schedule || !Number.isFinite(Number(result.requiredNominal)) || result.requiredNominal <= 0) {
        return { marginMm: null, marginPercent: null };
      }
      const marginMm = result.schedule.thk - result.requiredNominal;
      return {
        marginMm,
        marginPercent: (marginMm / result.requiredNominal) * 100
      };
    }

    function reportRow(label, value) {
      return `<tr><th>${escapeHtml(label)}</th><td>${escapeHtml(value)}</td></tr>`;
    }

    function reportFactorRow(name, symbol, value, requirement) {
      return `
        <tr>
          <td>${escapeHtml(name)}</td>
          <td><code>${escapeHtml(symbol)}</code></td>
          <td>${escapeHtml(value)}</td>
          <td>${escapeHtml(requirement)}</td>
        </tr>
      `;
    }

    function buildReportFlowPanel(result) {
      const corrosionAdd = result.input.c;
      const toleranceAdd = result.requiredNominal - result.tm;
      const scheduleThickness = result.schedule ? result.schedule.thk : 0;
      const maxThickness = Math.max(result.requiredNominal, scheduleThickness, corrosionAdd, toleranceAdd, 1);
      const barHeight = value => `${Math.max(8, Math.min(100, (value / maxThickness) * 100))}%`;
      const scheduleName = result.schedule ? result.schedule.sch : "Not found";
      const scheduleValue = result.schedule ? round(result.schedule.thk) : "0.00";

      return `
        <div class="report-flow-panel" aria-label="Equation and calculation flow inside report">
          <div class="flow-grid report-flow-grid">
            <div class="flow-equation">
              <div class="flow-code">ASME B31.3 &nbsp; Eq. (304.1.1)</div>
              <div class="flow-formula" aria-label="ASME B31.3 pressure thickness formula inside report">
                <span class="formula-left">t =</span>
                <span class="fraction">
                  <span class="numerator">P × D</span>
                  <span class="denominator">2 × (S × E × W + P × Y)</span>
                </span>
                <span class="formula-plus">+ C</span>
              </div>
              <dl class="flow-symbols">
                <div><dt>P</dt><dd>Design pressure</dd></div>
                <div><dt>D</dt><dd>Outside diameter</dd></div>
                <div><dt>S</dt><dd>Allowable stress</dd></div>
                <div><dt>E</dt><dd>Quality factor</dd></div>
                <div><dt>W</dt><dd>Weld joint strength reduction factor</dd></div>
                <div><dt>Y</dt><dd>ASME Y coefficient</dd></div>
                <div><dt>C</dt><dd>Corrosion allowance</dd></div>
              </dl>
            </div>

            <div class="flow-detail">
              <div class="flow-table-wrap">
                <table class="flow-table report-flow-table">
                  <thead>
                    <tr>
                      <th>Step</th>
                      <th>Description</th>
                      <th>Formula / Basis</th>
                      <th>Thickness (mm)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><span>1</span></td>
                      <td>Pressure thickness (t)</td>
                      <td>ASME Eq. 304.1.1</td>
                      <td>${round(result.t)}</td>
                    </tr>
                    <tr>
                      <td><span>2</span></td>
                      <td>Add corrosion allowance (C)</td>
                      <td>tm = t + C</td>
                      <td>${round(result.tm)}</td>
                    </tr>
                    <tr>
                      <td><span>3</span></td>
                      <td>Apply mill tolerance (${escapeHtml(result.input.millTolerance.flowLabel)})</td>
                      <td>${escapeHtml(result.input.millTolerance.formula)}</td>
                      <td>${round(result.requiredNominal)}</td>
                    </tr>
                    <tr>
                      <td><span>4</span></td>
                      <td>Nearest higher schedule</td>
                      <td>${escapeHtml(scheduleName)}</td>
                      <td>${escapeHtml(scheduleValue)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="flow-chart report-flow-chart" aria-label="Thickness build-up chart inside report">
                <div class="chart-axis"><span>Thickness (mm)</span></div>
                <div class="chart-bars">
                  <div class="chart-item">
                    <strong>${round(result.t)}</strong>
                    <span class="bar teal" style="--bar-height: ${barHeight(result.t)}"></span>
                    <small>Pressure<br>Thickness</small>
                  </div>
                  <div class="chart-item">
                    <strong>+${round(corrosionAdd)}</strong>
                    <span class="bar aqua" style="--bar-height: ${barHeight(corrosionAdd)}"></span>
                    <small>+ Corrosion<br>Allowance</small>
                  </div>
                  <div class="chart-item">
                    <strong>+${round(toleranceAdd)}</strong>
                    <span class="bar aqua" style="--bar-height: ${barHeight(toleranceAdd)}"></span>
                    <small>+ Mill<br>Tolerance</small>
                  </div>
                  <div class="chart-item">
                    <strong>${round(result.requiredNominal)}</strong>
                    <span class="bar navy" style="--bar-height: ${barHeight(result.requiredNominal)}"></span>
                    <small>Required<br>Nominal</small>
                  </div>
                </div>
              </div>  
            </div>
          </div>
        </div>
      `;
    }

    function buildReportPipeSection(result) {
      const outerRadius = 104;
      const centerX = 240;
      const centerY = 160;
      const guideEndX = 340;
      const arrowX = 354;
      const shownWall = result.schedule ? result.schedule.thk : result.requiredNominal;
      const visualWall = Math.max(8, Math.min(34, (shownWall / result.input.D) * outerRadius * 2));
      const innerRadius = Math.max(40, outerRadius - visualWall);
      const innerY = round(centerY + innerRadius, 1);
      const outerY = centerY + outerRadius;
      const innerArrowTopY = Math.max(centerY + innerRadius - 24, centerY + innerRadius - 10);
      const outerArrowBottomY = Math.min(centerY + outerRadius + 26, centerY + outerRadius + 18);
      const scheduleLabel = result.schedule
        ? `${result.schedule.sch} · ${round(result.schedule.thk)} mm`
        : "Schedule not found";

      return `
        <div class="report-pipe-section-card">
          <div class="pipe-section-head report-pipe-section-head">
            <span>2D Section View</span>
            <strong>${escapeHtml(scheduleLabel)}</strong>
          </div>
          <svg class="pipe-section-svg report-pipe-section-svg" viewBox="0 0 520 312" role="img" aria-label="Report 2D pipe section showing outside diameter and wall thickness">
            <defs>
              <linearGradient id="reportPipeSteel" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stop-color="#e4e8ed"></stop>
                <stop offset="55%" stop-color="#aeb8c2"></stop>
                <stop offset="100%" stop-color="#7f8b96"></stop>
              </linearGradient>
            </defs>
            <g transform="translate(0 -24)">
              <circle cx="240" cy="160" r="104" fill="url(#reportPipeSteel)" stroke="#6f7c88" stroke-width="5"></circle>
              <circle cx="240" cy="160" r="${round(innerRadius, 1)}" fill="#f4f6f8" stroke="#6f7c88" stroke-width="3"></circle>

              <line x1="76" y1="56" x2="76" y2="122" class="section-dim-line"></line>
              <line x1="76" y1="198" x2="76" y2="264" class="section-dim-line"></line>
              <path d="M66 70 L76 56 L86 70" class="section-arrow-open"></path>
              <path d="M66 250 L76 264 L86 250" class="section-arrow-open"></path>
              <line x1="96" y1="56" x2="170" y2="56" class="section-guide-line"></line>
              <line x1="96" y1="264" x2="170" y2="264" class="section-guide-line"></line>
              <text x="22" y="164" class="section-dim-text section-od-value">OD ${round(result.input.D)} mm</text>

              <line x1="${centerX}" y1="${innerY}" x2="${guideEndX}" y2="${innerY}" class="section-guide-line"></line>
              <line x1="${centerX}" y1="${outerY}" x2="${guideEndX}" y2="${outerY}" class="section-guide-line"></line>
              <line x1="${arrowX}" y1="${round(innerArrowTopY, 1)}" x2="${arrowX}" y2="${innerY}" class="section-dim-line"></line>
              <path d="${arrowPath(arrowX, innerY, "down")}" class="section-arrow-open"></path>
              <line x1="${arrowX}" y1="${round(outerArrowBottomY, 1)}" x2="${arrowX}" y2="${outerY}" class="section-dim-line"></line>
              <path d="${arrowPath(arrowX, outerY, "up")}" class="section-arrow-open"></path>
              <text x="382" y="257" class="section-dim-text section-label">Req. thickness</text>
              <text x="382" y="282" class="section-dim-text section-value">${round(result.requiredNominal)} mm</text>
            </g>
          </svg>
        </div>
      `;
    }

    function buildProfessionalReportHTML(result) {
      const i = result.input;
      const status = reportStatusLabel(result.severity);
      const margin = getScheduleMargin(result);
      const scheduleLibrary = getScheduleLibraryLabel(result);
      const scheduleName = result.schedule ? result.schedule.sch : "Not found";
      const scheduleThickness = result.schedule ? `${round(result.schedule.thk)} mm` : "Not available";
      const marginMm = Number.isFinite(margin.marginMm) ? `${round(margin.marginMm)} mm` : "Not available";
      const marginPercent = Number.isFinite(margin.marginPercent) ? `${round(margin.marginPercent, 2)}%` : "Not available";
      const decision = status.label;
      const notes = i.notes || "No engineering notes entered.";
      const context = i.context || {};

      return `
        <article class="calc-report-sheet">
          <header class="calc-report-header">
            <div>
              <span class="report-kicker">Engineering Calculation Report</span>
              <h1>Pipe Thickness Calculation Report</h1>
              <p class="report-subtitle">Minimum wall thickness due to internal pressure</p>
            </div>
            <div class="report-status-card ${status.className}">
              <span>Status</span>
              <strong>${escapeHtml(status.label)}</strong>
            </div>
          </header>

          <div class="report-meta-grid">
            <div><span>Report type</span><strong>Engineering Calculation Report</strong></div>
            <div><span>Code basis</span><strong>ASME B31.3 Process Piping</strong></div>
            <div><span>Generated</span><strong>${escapeHtml(result.generatedAt)}</strong></div>
          </div>

          <section class="report-section">
            <h2><span class="report-section-number">1</span> Calculation Context</h2>
            <table class="report-table">
              <tbody>
                ${reportRow("Objective", context.objective || "Not specified")}
                ${reportRow("Project No. / MOC No. / Job No.", context.projectNo || "Not specified")}
                ${reportRow("Line No. / Tag No.", context.lineNo || "Not specified")}
              </tbody>
            </table>
          </section>

          <section class="report-section">
            <h2><span class="report-section-number">2</span> Executive Result Summary</h2>
            <div class="result-card-grid">
              <div class="result-card"><span>Pressure thickness, t</span><strong>${round(result.t)} mm</strong></div>
              <div class="result-card"><span>Thickness after corrosion allowance, tm</span><strong>${round(result.tm)} mm</strong></div>
              <div class="result-card highlight"><span>Required nominal thickness</span><strong>${round(result.requiredNominal)} mm</strong></div>
              <div class="result-card selected"><span>Suggested schedule</span><strong>${escapeHtml(scheduleName)}</strong><small>${escapeHtml(scheduleThickness)}</small></div>
            </div>
            ${buildReportPipeSection(result)}
            <table class="report-table">
              <tbody>
                ${reportRow("Final schedule library used", scheduleLibrary)}
                ${reportRow("Schedule thickness margin", marginMm)}
                ${reportRow("Schedule thickness margin", marginPercent)}
                ${reportRow("Engineering decision status", decision)}
              </tbody>
            </table>
          </section>

          <section class="report-section report-design-input-section">
            <h2><span class="report-section-number">3</span> Design Input Basis</h2>
            <table class="report-table two-column">
              <tbody>
                ${reportRow("Design pressure", `${i.P_input} ${unitLabel(i.unit)}`)}
                ${reportRow("Converted pressure, P", `${round(i.P, 4)} MPa`)}
                ${reportRow("Design temperature", `${i.temp} deg C`)}
                ${reportRow("Nominal pipe size", `${i.nps} inch`)}
                ${reportRow("Outside diameter, D", `${round(i.D)} mm`)}
                ${reportRow("Material", i.material)}
                ${reportRow("Pipe type", i.pipeType)}
                ${reportRow("Schedule library", i.scheduleSource)}
                ${reportRow("Corrosion / mechanical allowance, c", `${round(i.c)} mm`)}
                ${reportRow("Mill tolerance", i.millTolerance.label)}
              </tbody>
            </table>
          </section>

          <section class="report-section">
            <h2><span class="report-section-number">4</span> Code Factors Used</h2>
            <table class="report-table">
              <thead>
                <tr><th>Factor name</th><th>Symbol</th><th>Value</th><th>Verification requirement</th></tr>
              </thead>
              <tbody>
                ${reportFactorRow("Allowable stress", "S", `${round(i.S, 3)} MPa`, "Verify from controlled ASME B31.3 stress table and project PMS.")}
                ${reportFactorRow("Quality factor", "E", round(i.E, 3), "Verify pipe product form, weld quality and applicable code table.")}
                ${reportFactorRow("Weld joint strength reduction factor", "W", round(i.W, 3), "Verify weld type, temperature and applicable B31.3 W-factor basis.")}
                ${reportFactorRow("Y coefficient", "Y", round(i.Y, 3), "Verify material category and design temperature basis.")}
              </tbody>
            </table>
          </section>

          <section class="report-section report-equation-section">
            <h2><span class="report-section-number">5</span> Equation and Calculation Flow</h2>
            ${buildReportFlowPanel(result)}
            <table class="report-table">
              <tbody>
                ${reportRow("D/6 thin-wall limit", `${round(result.dBySix, 3)} mm`)}
                ${reportRow("P/(S x E)", round(result.ratio, 5))}
                ${reportRow("Calculated pressure thickness, t", `${round(result.t, 3)} mm`)}
                ${reportRow("Thickness after corrosion allowance, tm", `${round(result.tm, 3)} mm`)}
                ${reportRow("Required nominal thickness", `${round(result.requiredNominal, 3)} mm`)}
              </tbody>
            </table>
          </section>

          <section class="report-section">
            <h2><span class="report-section-number">6</span> Schedule Selection Summary</h2>
            <table class="report-table">
              <tbody>
                ${reportRow("Primary schedule library checked", i.scheduleSource)}
                ${reportRow("Final schedule library used", scheduleLibrary)}
                ${reportRow("Suggested schedule", scheduleName)}
                ${reportRow("Selected schedule thickness", scheduleThickness)}
                ${reportRow("Margin over required nominal thickness", `${marginMm} (${marginPercent})`)}
              </tbody>
            </table>
          </section>

          <section class="report-section">
            <h2><span class="report-section-number">7</span> Engineering Checks and Actions</h2>
            ${buildWarningAssessmentTable(result.warnings)}
          </section>

          <section class="report-section">
            <h2><span class="report-section-number">8</span> Engineering Notes</h2>
            <div class="report-notes">${escapeHtml(notes)}</div>
          </section>

          <section class="report-section">
            <h2><span class="report-section-number">9</span> Scope Limitation and Disclaimer</h2>
            <div class="report-disclaimer">
              This tool is for preliminary engineering calculation support only. Final design shall be verified against the controlled code edition, project PMS, IBR requirements where applicable, and approved engineering judgment. This calculation does not replace flexibility analysis, branch reinforcement check, bend or fitting assessment, flange leakage check, NDE, PWHT, hydrotest, or formal design approval.
            </div>
          </section>

          <section class="report-section">
            <h2><span class="report-section-number">10</span> Verification and Approval</h2>
            <table class="report-table signoff-table">
              <thead><tr><th>Role</th><th>Name</th><th>Signature</th><th>Date</th></tr></thead>
              <tbody>
                <tr><td>Prepared by</td><td><input class="report-signoff-input" type="text" aria-label="Prepared by name"></td><td></td><td></td></tr>
                <tr><td>Checked by</td><td><input class="report-signoff-input" type="text" aria-label="Checked by name"></td><td></td><td></td></tr>
                <tr><td>Approved by</td><td><input class="report-signoff-input" type="text" aria-label="Approved by name"></td><td></td><td></td></tr>
              </tbody>
            </table>
          </section>
        </article>
      `;
    }

    function buildEmptyReportHTML() {
      return `<div class="calc-report-empty">Calculation report will appear here after calculation.</div>`;
    }

    function buildCalculationStoppedReportHTML(message) {
      return `
        <article class="calc-report-stopped">
          <h2>Calculation stopped</h2>
          <p>${escapeHtml(message)}</p>
          <span>Revise input data or use the applicable code method before proceeding.</span>
        </article>
      `;
    }

    function buildReport(result) {
      const i = result.input;
      const context = i.context || {};
      return `PIPE THICKNESS CALCULATION REPORT | ASME B31.3\n` +
`Generated: ${result.generatedAt}\n\n` +
`0. CALCULATION CONTEXT\n` +
`Objective: ${context.objective || "Not specified"}\n` +
`Project No. / MOC No. / Job No.: ${context.projectNo || "Not specified"}\n` +
`Line No. / Tag No.: ${context.lineNo || "Not specified"}\n\n` +
`1. DESIGN INPUTS\n` +
`Design pressure: ${i.P_input} ${unitLabel(i.unit)}\n` +
`Converted pressure, P: ${round(i.P, 4)} MPa\n` +
`Design temperature: ${i.temp} °C\n` +
`Material: ${i.material}\n` +
`Pipe type: ${i.pipeType}\n` +
`Nominal pipe size: ${i.nps} inch\n` +
`Schedule library: ${i.scheduleSource}\n` +
`Outside diameter, D: ${round(i.D, 3)} mm\n` +
`Allowable stress, S: ${round(i.S, 3)} MPa\n` +
`Quality factor, E: ${round(i.E, 3)}\n` +
`Weld joint strength reduction factor, W: ${round(i.W, 3)}\n` +
`Y coefficient: ${round(i.Y, 3)}\n` +
`Corrosion / mechanical allowance, c: ${round(i.c, 3)} mm\n` +
`Mill tolerance: ${i.millTolerance.label}\n\n` +
`2. FORMULA USED\n` +
`t = P × D / [2 × (S × E × W + P × Y)]\n` +
`tm = t + c\n` +
`Required nominal thickness = ${i.millTolerance.formula}\n\n` +
`3. CALCULATION\n` +
`t = ${round(i.P, 4)} × ${round(i.D, 3)} / [2 × (${round(i.S, 3)} × ${round(i.E, 3)} × ${round(i.W, 3)} + ${round(i.P, 4)} × ${round(i.Y, 3)})]\n` +
`t = ${round(result.t, 3)} mm\n` +
`tm = ${round(result.t, 3)} + ${round(i.c, 3)} = ${round(result.tm, 3)} mm\n` +
`Required nominal thickness = ${i.millTolerance.mode === "fixed_mm"
  ? `${round(result.tm, 3)} + ${formatMillToleranceValue(i.millTolerance.value, i.millTolerance.mode)} = ${round(result.requiredNominal, 3)} mm`
  : `${round(result.tm, 3)} / (1 - ${round(i.millTolerance.value, 3)} / 100) = ${round(result.requiredNominal, 3)} mm`}\n\n` +
`4. STANDARD SCHEDULE SELECTION\n` +
`Primary schedule library checked: ${i.scheduleSource}\n` +
`Final schedule library used: ${result.schedule ? (result.schedule.libraryLabel || scheduleSourceLabels[result.scheduleSourceUsed] || i.scheduleSource) : "Not available"}\n` +
`Suggested schedule: ${result.schedule ? result.schedule.sch : "Not available in checked schedule libraries"}\n` +
`Selected schedule thickness: ${result.schedule ? round(result.schedule.thk, 3) + " mm" : "Not available"}\n\n` +
`5. CHECKS AND WARNINGS\n` +
`D/6 limit: ${round(result.dBySix, 3)} mm\n` +
`P/(S × E): ${round(result.ratio, 5)}\n` +
`${result.warnings.map((w, idx) => `${idx + 1}. [${w.level.toUpperCase()}] ${w.text}`).join("\n")}\n\n` +
`6. ENGINEERING NOTES\n` +
`${i.notes || "No notes entered."}\n\n` +
`7. DISCLAIMER\n` +
`This tool is for preliminary engineering calculation support only. Final design shall be verified against the controlled code edition, project PMS, IBR requirements where applicable, and approved engineering judgment.`;
    }

    function unitLabel(unit) {
      return {
        kgcm2: "kg/cm²",
        bar: "bar",
        mpa: "MPa",
        kpa: "kPa",
        psi: "psi"
      }[unit] || unit;
    }

    function escapeHtml(value) {
      return String(value).replace(/[&<>'"]/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;"
      }[char]));
    }

    function selectMaterialByName(materialName) {
      const option = Array.from(els.material.options).find(item => normalizeText(item.value) === normalizeText(materialName));
      if (option) {
        els.material.value = option.value;
      }
    }

    function loadExample() {
      Object.entries(sampleCase).forEach(([key, value]) => {
        if (els[key] && key !== "material") els[key].value = value;
      });
      selectMaterialByName(sampleCase.material);
      setActiveScheduleLibrary();
      syncPressureInputLimits();
      els.nps.value = sampleCase.nps;
      els.od.value = sampleCase.od;
      applyAutoFillFactors();
      calculate({ syncScenarioBase: true });
    }

    function initializeDefaultForm() {
      selectMaterialByName(sampleCase.material);
      setActiveScheduleLibrary();
      syncPressureInputLimits();
      syncMillToleranceControl();
      els.nps.value = sampleCase.nps;
      els.od.value = sampleCase.od;
      els.calcObjective.value = "";
      els.projectNo.value = "";
      els.lineNo.value = "";
      els.notes.value = "";
      applyAutoFillFactors();
      clearResults();
    }

    function resetForm() {
      els.form.reset();
      selectMaterialByName(sampleCase.material);
      setActiveScheduleLibrary();
      syncPressureInputLimits();
      syncMillToleranceControl();
      els.nps.value = "18";
      els.od.value = pipeLibrary["18"].od;
      els.calcObjective.value = "";
      els.projectNo.value = "";
      els.lineNo.value = "";
      applyAutoFillFactors();
      clearResults();
    }

    function clearResults() {
      els.reportBox.innerHTML = buildEmptyReportHTML();
      els.warningsBox.innerHTML = `<div class="status-line"><span class="dot warn"></span><span>Enter input data and click Calculate.</span></div>`;
      setResultStatus("Awaiting calculation", "waiting", "•");
      clearResultValues();
      lastResult = null;
    }

    function clearResultValues() {
      [els.tPressure, els.tmValue, els.nominalValue, els.scheduleThickness, els.dBySix].forEach(el => {
        el.textContent = "0.00";
      });
      els.scheduleValue.textContent = "-";
      els.scheduleMetric.classList.remove("good", "warn", "bad");
      resetFlowPanel();
      resetPipeSection();
    }

    function resetPipeSection() {
      els.pipeInnerCircle.setAttribute("r", "90");
      els.sectionOdLabel.textContent = "OD 0.00 mm";
      els.sectionRequiredLabel.textContent = "0.00 mm";
      els.sectionScheduleLabel.textContent = "Schedule pending";
      setLine(els.sectionInnerGuide, 240, 250, 340, 250);
      setLine(els.sectionOuterGuide, 240, 264, 340, 264);
      setLine(els.sectionInnerArrow, 354, 226, 354, 250);
      setLine(els.sectionOuterArrow, 354, 290, 354, 264);
      els.sectionInnerArrowHead.setAttribute("d", "M344 238 L354 250 L364 238");
      els.sectionOuterArrowHead.setAttribute("d", "M344 276 L354 264 L364 276");
    }

    function resetFlowPanel() {
      [
        els.flowPressureThickness,
        els.flowAfterCorrosion,
        els.flowRequiredNominal,
        els.flowScheduleThickness,
        els.flowBarPressureValue,
        els.flowBarFinalValue
      ].forEach(el => el.textContent = "0.00");

      const fixedMm = els.millToleranceMode.value === "fixed_mm";
      els.flowTolerancePct.textContent = `${fixedMm ? formatMillToleranceValue(Number(els.tolerance.value) || 0, "fixed_mm") : round(Number(els.tolerance.value) || 0, 2)}${fixedMm ? " mm" : "%"}`;
      els.flowToleranceBasis.textContent = fixedMm
        ? `tn = tm + ${formatMillToleranceValue(Number(els.tolerance.value) || 0, "fixed_mm")} mm`
        : "tn = tm / (1 - tolerance)";
      els.flowScheduleName.textContent = "Pending calculation";
      els.flowBarCorrosionValue.textContent = "+0.00";
      els.flowBarToleranceValue.textContent = "+0.00";
      [els.flowBarPressure, els.flowBarCorrosion, els.flowBarTolerance, els.flowBarFinal].forEach(el => {
        el.style.setProperty("--bar-height", "8%");
      });
    }

    function copyReport() {
      const text = lastResult ? buildReport(lastResult) : els.reportBox.textContent;
      navigator.clipboard.writeText(text).then(() => {
        setResultStatus("Report copied", "info", "✓");
      }).catch(() => {
        alert("Copy failed. Select the report text and copy manually.");
      });
    }

    function printAuditReport() {
      const panel = document.querySelector(".report-panel");
      if (panel?.classList.contains("collapsed")) {
        panel.classList.remove("collapsed");
        els.reportToggleBtn.textContent = "Hide Report";
        els.reportToggleBtn.setAttribute("aria-expanded", "true");
      }
      document.body.classList.add("print-audit-report");
      const cleanup = () => document.body.classList.remove("print-audit-report");
      window.addEventListener("afterprint", cleanup, { once: true });
      window.print();
      setTimeout(cleanup, 1000);
    }

    function buildAuditExcelHTML(result) {
      const i = result.input;
      const context = i.context || {};
      const scheduleName = result.schedule ? result.schedule.sch : "Not available";
      const scheduleThickness = result.schedule ? `${round(result.schedule.thk, 3)} mm` : "Not available";
      const scheduleLibrary = result.schedule
        ? result.schedule.libraryLabel || scheduleSourceLabels[result.scheduleSourceUsed]
        : "Not available";
      const margin = getScheduleMargin(result);
      const warnings = result.warnings.map(classifyWarningAssessment);
      const signoffValues = Array.from(document.querySelectorAll(".report-signoff-input"), input => input.value.trim());
      const value = item => escapeHtml(item == null || item === "" ? "Not specified" : String(item));
      const row = (label, item, unit = "") => `<tr><td class="label">${value(label)}</td><td>${value(item)}</td><td>${value(unit)}</td></tr>`;
      const section = title => `<tr class="section"><th colspan="3">${value(title)}</th></tr>`;

      return `
        <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
          <head>
            <meta charset="utf-8">
            <style>
              @page { margin: 0.45in; }
              body { font-family: Calibri, Arial, sans-serif; color: #17243e; font-size: 10pt; }
              table { border-collapse: collapse; width: 100%; }
              th, td { border: 1px solid #cbd5e1; padding: 7px 8px; vertical-align: top; }
              .title { background: #123b65; color: #ffffff; font-size: 18pt; font-weight: bold; padding: 15px; border: 0; }
              .subtitle { background: #eaf2fb; color: #315273; font-size: 10pt; padding: 8px 15px; border: 0; }
              .meta { background: #f5f8fc; }
              .meta td { border-color: #d7e2ef; }
              .meta .label { color: #526b87; font-weight: bold; width: 18%; }
              .section th { background: #dceafb; color: #143c66; font-size: 12pt; text-align: left; padding: 9px; }
              .label { background: #f5f8fc; font-weight: bold; width: 34%; }
              .flow th { background: #edf3fa; color: #173e67; font-weight: bold; }
              .flow td:last-child { text-align: right; font-weight: bold; }
              .summary td { width: 25%; background: #f8fbff; }
              .summary .value { color: #087f50; font-size: 14pt; font-weight: bold; }
              .pass { color: #07864e; font-weight: bold; }
              .warning { color: #a76400; font-weight: bold; }
              .action { color: #c52835; font-weight: bold; }
              .info { color: #315fc5; font-weight: bold; }
              .notes { white-space: pre-wrap; line-height: 1.35; }
              .approval td { height: 28px; }
              .footer { color: #526b87; font-size: 9pt; padding-top: 10px; border: 0; }
            </style>
          </head>
          <body>
            <table>
              <tr><td colspan="3" class="title">PIPE THICKNESS CALCULATION REPORT</td></tr>
              <tr><td colspan="3" class="subtitle">ASME B31.3 Process Piping | Engineering calculation support | Verify all values against the controlled code edition and project basis.</td></tr>
              <tr class="meta"><td class="label">Report type</td><td>Engineering Calculation Report</td><td>Generated: ${value(result.generatedAt)}</td></tr>
              <tr class="meta"><td class="label">Objective</td><td colspan="2">${value(context.objective || "Not specified")}</td></tr>
              <tr class="meta"><td class="label">Project / MOC / Job</td><td>${value(context.projectNo || "Not specified")}</td><td>Line / Tag: ${value(context.lineNo || "Not specified")}</td></tr>
              ${section("1. Executive Result Summary")}
              <tr class="summary"><td>Minimum required nominal thickness</td><td class="value">${value(round(result.requiredNominal, 3))} mm</td><td>Decision: ${value(reportStatusLabel(result.severity).label)}</td></tr>
              <tr class="summary"><td>Calculated pressure thickness, t</td><td>${value(round(result.t, 3))} mm</td><td>Thickness after corrosion, tm: ${value(round(result.tm, 3))} mm</td></tr>
              <tr class="summary"><td>Suggested schedule</td><td>${value(scheduleName)}</td><td>${value(scheduleThickness)}</td></tr>
              ${section("2. Design Input Basis")}
              ${row("Design pressure", i.P_input, unitLabel(i.unit))}
              ${row("Converted pressure, P", round(i.P, 4), "MPa")}
              ${row("Design temperature", i.temp, "deg C")}
              ${row("Material", i.material)}
              ${row("Pipe type", i.pipeType)}
              ${row("Nominal pipe size", i.nps, "inch")}
              ${row("Outside diameter, D", round(i.D, 3), "mm")}
              ${row("Schedule library", i.scheduleSource)}
              ${row("Corrosion / mechanical allowance, c", round(i.c, 3), "mm")}
              ${row("Mill tolerance basis", i.millTolerance.label)}
              ${section("3. Code Factors Used")}
              ${row("Allowable stress, S", round(i.S, 3), "MPa")}
              ${row("Quality factor, E", round(i.E, 3))}
              ${row("Weld joint strength reduction factor, W", round(i.W, 3))}
              ${row("Y coefficient", round(i.Y, 3))}
              ${section("4. Equation and Calculation Flow")}
              <tr class="flow"><th>Step</th><th>Formula / basis</th><th>Thickness / result</th></tr>
              <tr class="flow"><td>1. Pressure thickness</td><td>t = P x D / [2 x (S x E x W + P x Y)]</td><td>${value(round(result.t, 3))} mm</td></tr>
              <tr class="flow"><td>2. Corrosion allowance</td><td>tm = t + c</td><td>${value(round(result.tm, 3))} mm</td></tr>
              <tr class="flow"><td>3. Mill tolerance</td><td>${value(i.millTolerance.formula)}</td><td>${value(round(result.requiredNominal, 3))} mm</td></tr>
              <tr class="flow"><td>4. Schedule selection</td><td>Nearest higher standard thickness from selected library</td><td>${value(scheduleName)} | ${value(scheduleThickness)}</td></tr>
              ${row("Thin-wall check limit, D/6", round(result.dBySix, 3), "mm")}
              ${row("Pressure ratio, P/(S x E)", round(result.ratio, 5))}
              ${section("5. Schedule Selection Summary")}
              ${row("Primary schedule library checked", i.scheduleSource)}
              ${row("Final schedule library used", scheduleLibrary)}
              ${row("Suggested schedule", scheduleName)}
              ${row("Schedule thickness margin", margin.marginMm == null ? "Not available" : `${round(margin.marginMm, 3)} mm (${round(margin.marginPercent, 2)}%)`)}
              ${section("6. Checks and Warnings")}
              <tr class="flow"><th>Category</th><th>Assessment / Status</th><th>Remarks / Action</th></tr>
              ${warnings.map(warning => `<tr><td>${value(warning.category)}</td><td class="${warning.statusClass}">${value(warning.assessment)} | ${value(warning.status)}</td><td>${value(warning.remark)}</td></tr>`).join("")}
              ${section("7. Engineering Notes")}
              <tr><td colspan="3" class="notes">${value(i.notes || "No notes entered.")}</td></tr>
              ${section("8. Verification and Approval")}
              <tr class="flow"><th>Role</th><th>Name</th><th>Signature / Date</th></tr>
              <tr class="approval"><td>Prepared by</td><td>${value(signoffValues[0])}</td><td></td></tr>
              <tr class="approval"><td>Checked by</td><td>${value(signoffValues[1])}</td><td></td></tr>
              <tr class="approval"><td>Approved by</td><td>${value(signoffValues[2])}</td><td></td></tr>
              <tr><td colspan="3" class="footer">Disclaimer: This tool is for preliminary engineering calculation support only. Final design shall be verified against the controlled code edition, project PMS, IBR requirements where applicable, and approved engineering judgment.</td></tr>
            </table>
          </body>
        </html>
      `;
    }

    function exportAuditExcel() {
      if (!lastResult) {
        showInputGuidance("Please calculate the pipe thickness before downloading the Audit Excel report.");
        return;
      }
      const workbookHtml = buildAuditExcelHTML(lastResult);
      const blob = new Blob(["\ufeff", workbookHtml], { type: "application/vnd.ms-excel;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      const stamp = new Date().toISOString().slice(0, 10);
      link.href = url;
      link.download = `pipe-thickness-audit-report-${stamp}.xls`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }

    function exportCsv() {
      if (!lastResult) {
        alert("Please run a calculation first.");
        return;
      }
      const r = lastResult;
      const rows = [
        ["Field", "Value", "Unit"],
        ["Design pressure", r.input.P_input, unitLabel(r.input.unit)],
        ["Converted pressure", round(r.input.P, 4), "MPa"],
        ["Design temperature", r.input.temp, "°C"],
        ["Material", r.input.material, ""],
        ["Pipe type", r.input.pipeType, ""],
        ["NPS", r.input.nps, "inch"],
        ["Primary schedule library checked", r.input.scheduleSource, ""],
        ["Final schedule library used", r.schedule ? (r.schedule.libraryLabel || scheduleSourceLabels[r.scheduleSourceUsed] || r.input.scheduleSource) : "Not available", ""],
        ["OD", round(r.input.D, 3), "mm"],
        ["S", round(r.input.S, 3), "MPa"],
        ["E", round(r.input.E, 3), ""],
        ["W", round(r.input.W, 3), ""],
        ["Y", round(r.input.Y, 3), ""],
        ["Corrosion allowance", round(r.input.c, 3), "mm"],
        ["Mill tolerance", formatMillToleranceValue(r.input.millTolerance.value, r.input.millTolerance.mode), r.input.millTolerance.unit],
        ["Pressure design thickness t", round(r.t, 3), "mm"],
        ["Minimum thickness tm", round(r.tm, 3), "mm"],
        ["Required nominal thickness", round(r.requiredNominal, 3), "mm"],
        ["Suggested schedule", r.schedule ? r.schedule.sch : "Not available", ""],
        ["Schedule thickness", r.schedule ? round(r.schedule.thk, 3) : "", "mm"],
        ["D/6", round(r.dBySix, 3), "mm"],
        ["P/(S*E)", round(r.ratio, 5), ""]
      ];
      const csv = rows.map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(",")).join("\n");
      const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "pipe_thickness_calculation_b31_3.csv";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }

    const scenarioState = {
      active: "base",
      pipeType: "seamless",
      material: "A335 Gr P11",
      cases: []
    };

    const scenarioMaterialData = {
      "A106 Gr B": { stress: 117, cost: 1.08 },
      "A335 Gr P11": { stress: 90.34, cost: 1.00 },
      "A312 TP316": { stress: 115, cost: 1.12 }
    };

    function scenarioEls() {
      return {
        autoSchedule: document.getElementById("scenarioAutoSchedule"),
        pressure: document.getElementById("scenarioPressure"),
        pressureOut: document.getElementById("scenarioPressureOut"),
        temp: document.getElementById("scenarioTemp"),
        tempOut: document.getElementById("scenarioTempOut"),
        corrosion: document.getElementById("scenarioCorrosion"),
        corrosionOut: document.getElementById("scenarioCorrosionOut"),
        e: document.getElementById("scenarioE"),
        eOut: document.getElementById("scenarioEOut"),
        tolerance: document.getElementById("scenarioTolerance"),
        toleranceOut: document.getElementById("scenarioToleranceOut"),
        toleranceUnit: document.getElementById("scenarioToleranceUnit"),
        od: document.getElementById("scenarioOd"),
        odOut: document.getElementById("scenarioOdOut"),
        materialSelect: document.getElementById("scenarioMaterialSelect"),
        stress: document.getElementById("scenarioStress"),
        req: document.getElementById("scenarioReqThickness"),
        schedule: document.getElementById("scenarioSchedule"),
        scheduleThk: document.getElementById("scenarioScheduleThk"),
        table: document.getElementById("scenarioTableBody"),
        bars: document.getElementById("scenarioBars")
      };
    }

    function currentScenarioInput() {
      const s = scenarioEls();
      const mat = getScenarioMaterialProperties(scenarioState.material, Number(s.temp.value));
      const millTolerance = getScenarioMillTolerance(scenarioState.material, Number(s.tolerance.value));
      return {
        name: scenarioState.active === "base" ? "Base Case" : `Scenario ${scenarioState.active.toUpperCase()}`,
        material: scenarioState.material,
        pressure: Number(s.pressure.value),
        temp: Number(s.temp.value),
        corrosion: Number(s.corrosion.value),
        E: Number(s.e.value),
        tolerance: millTolerance.value,
        millTolerance,
        D: Number(s.od.value),
        S: mat.stress,
        W: scenarioState.pipeType === "welded" ? 1 : 1,
        Y: Number(els.yFactor.value) || 0.4,
        costFactor: mat.cost
      };
    }

    function getScenarioMillTolerance(materialName, value) {
      const material = materialStressLibrary?.materials?.find(item => item.input_description === materialName) || null;
      const stressRow = Array.isArray(material?.variants) && material.variants.length ? material.variants[0] : material;
      const fixedMm = isA358Material(material, stressRow);
      return {
        mode: fixedMm ? "fixed_mm" : "percent",
        value: fixedMm ? 0.3 : value,
        unit: fixedMm ? "mm" : "%"
      };
    }

    function syncScenarioMillToleranceControl(resetValue = false) {
      const s = scenarioEls();
      const fixedMm = getScenarioMillTolerance(scenarioState.material, Number(s.tolerance.value)).mode === "fixed_mm";
      s.tolerance.min = "0";
      s.tolerance.max = fixedMm ? "10" : "25";
      s.tolerance.step = fixedMm ? "0.01" : "0.1";
      s.tolerance.disabled = fixedMm;
      if (fixedMm) s.tolerance.value = "0.3";
      else if (resetValue) s.tolerance.value = "12.5";
      if (s.toleranceUnit) s.toleranceUnit.textContent = fixedMm ? "(mm, ASTM A358)" : "(%)";
    }

    function getScenarioMaterialProperties(materialName, tempC) {
      const fallback = scenarioMaterialData[materialName] || scenarioMaterialData["A335 Gr P11"];
      const material = materialStressLibrary?.materials?.find(item => item.input_description === materialName);
      if (!material) return fallback;

      try {
        const stressRow = Array.isArray(material.variants) && material.variants.length ? material.variants[0] : material;
        const materialSpecCheck = evaluateMaterialSpecificationTemperature(material, stressRow, tempC);
        if (materialSpecCheck && !materialSpecCheck.within) {
          throw new Error(materialSpecCheck.message);
        }
        const stress = lookupStress(material, stressRow, tempC).value;
        return { stress, cost: fallback.cost || 1 };
      } catch (err) {
        return {
          stress: null,
          cost: fallback.cost || 1,
          warning: err.message || "Allowable stress is unavailable for the selected scenario material and temperature."
        };
      }
    }

    function calculateScenario(input) {
      if (!Number.isFinite(input.S) || input.S <= 0) {
        return {
          ...input,
          P: pressureToMpa(input.pressure, "kgcm2"),
          t: null,
          tm: null,
          required: null,
          schedule: null,
          scheduleThickness: null,
          margin: null
        };
      }
      const P = pressureToMpa(input.pressure, "kgcm2");
      const denominator = 2 * ((input.S * input.E * input.W) + (P * input.Y));
      const t = (P * input.D) / denominator;
      const tm = t + input.corrosion;
      const required = requiredNominalFromMillTolerance(tm, input.millTolerance);
      const schedule = selectSchedule(els.nps.value, required);
      const scheduleThickness = schedule ? schedule.thk : required;
      const margin = required > 0 ? ((scheduleThickness - required) / required) * 100 : 0;
      return { ...input, P, t, tm, required, schedule, scheduleThickness, margin };
    }

    function scenarioPresets() {
      const basePressure = Number(els.pressure.value) || 49;
      const baseTemp = Number(els.temperature.value) || 480;
      const baseCorrosion = Number(els.corrosion.value) || 1.5;
      const baseE = Number(els.quality.value) || 1;
      const baseTolerance = Number(els.tolerance.value) || 12.5;
      const baseOd = Number(els.od.value) || 457;
      return {
        base: { pressure: basePressure, temp: baseTemp, corrosion: baseCorrosion, E: baseE, tolerance: baseTolerance, od: baseOd, material: els.material.value || sampleCase.material, pipeType: els.pipeType.value || "seamless" },
        a: { pressure: Math.min(100, basePressure * 1.22), temp: baseTemp, corrosion: baseCorrosion, E: 0.85, tolerance: 12.5, od: baseOd, material: findMaterialNameByKeywords(["A106", "GR B"]), pipeType: "welded" },
        b: { pressure: basePressure, temp: Math.max(-29, baseTemp - 55), corrosion: baseCorrosion, E: baseE, tolerance: baseTolerance, od: baseOd, material: els.material.value || sampleCase.material, pipeType: "seamless" },
        c: { pressure: basePressure, temp: baseTemp, corrosion: Math.min(6, baseCorrosion + 0.5), E: baseE, tolerance: 12.5, od: baseOd, material: findMaterialNameByKeywords(["A312", "TP316"]), pipeType: "seamless" }
      };
    }

    function pressureMpaToKgcm2(value) {
      return value / 0.0980665;
    }

    function scenarioMaterialFromMain(materialName) {
      const exact = materialStressLibrary?.materials?.find(item => item.input_description === materialName);
      if (exact) return exact.input_description;
      const name = normalizeText(materialName);
      if (name.includes("A106")) return findMaterialNameByKeywords(["A106", "GR B"]);
      if (name.includes("A312") || name.includes("TP316") || name.includes("316")) return findMaterialNameByKeywords(["A312", "TP316"]);
      if (name.includes("A335") || name.includes("P11")) return findMaterialNameByKeywords(["A335", "P11"]);
      return sampleCase.material;
    }

    function populateScenarioMaterialDropdown(selectedMaterial = sampleCase.material) {
      const s = scenarioEls();
      if (!s.materialSelect) return;
      s.materialSelect.innerHTML = "";

      if (materialStressLibrary?.materials?.length) {
        materialStressLibrary.materials.forEach(material => {
          const option = document.createElement("option");
          option.value = material.input_description;
          option.textContent = material.input_description;
          if (material.input_description === selectedMaterial) option.selected = true;
          s.materialSelect.appendChild(option);
        });
      } else {
        Object.keys(scenarioMaterialData).forEach(name => {
          const option = document.createElement("option");
          option.value = name;
          option.textContent = name;
          if (name === selectedMaterial) option.selected = true;
          s.materialSelect.appendChild(option);
        });
      }
    }

    function syncScenarioBaseFromResult(result) {
      const s = scenarioEls();
      if (!s.pressure || !result) return;

      const pressureKgcm2 = pressureMpaToKgcm2(result.input.P);
      scenarioState.active = "base";
      scenarioState.material = scenarioMaterialFromMain(result.input.material);
      scenarioState.pipeType = result.input.pipeType || "seamless";

      s.pressure.value = round(pressureKgcm2, 1);
      s.temp.value = round(result.input.temp, 0);
      s.corrosion.value = round(result.input.c, 1);
      s.e.value = round(result.input.E, 2);
      s.tolerance.value = formatMillToleranceValue(result.input.millTolerance.value, result.input.millTolerance.mode);
      s.od.value = round(result.input.D, 1);
      if (s.materialSelect) s.materialSelect.value = scenarioState.material;

      syncScenarioMillToleranceControl();
      syncScenarioButtons();
      renderScenarioPlayground();
    }

    function applyScenarioPreset(key) {
      const s = scenarioEls();
      const preset = scenarioPresets()[key] || scenarioPresets().base;
      scenarioState.active = key;
      scenarioState.material = preset.material;
      scenarioState.pipeType = preset.pipeType;
      s.pressure.value = round(preset.pressure, 1);
      s.temp.value = round(preset.temp, 0);
      s.corrosion.value = round(preset.corrosion, 1);
      s.e.value = round(preset.E, 2);
      s.tolerance.value = round(preset.tolerance, 1);
      s.od.value = round(preset.od, 1);
      if (s.materialSelect) s.materialSelect.value = preset.material;
      syncScenarioMillToleranceControl();
      syncScenarioButtons();
      renderScenarioPlayground();
    }

    function syncScenarioButtons() {
      document.querySelectorAll("[data-scenario-tab]").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.scenarioTab === scenarioState.active);
      });
      document.querySelectorAll("[data-pipe-type]").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.pipeType === scenarioState.pipeType);
      });
      const s = scenarioEls();
      if (s.materialSelect && s.materialSelect.value !== scenarioState.material) s.materialSelect.value = scenarioState.material;
    }

    function renderScenarioPlayground() {
      const s = scenarioEls();
      const active = calculateScenario(currentScenarioInput());
      const presets = scenarioPresets();
      const rows = ["base", "a", "b", "c"].map(key => {
        const preset = presets[key];
        const previousActive = { material: scenarioState.material, pipeType: scenarioState.pipeType, active: scenarioState.active };
        scenarioState.material = preset.material;
        scenarioState.pipeType = preset.pipeType;
        scenarioState.active = key;
        const input = {
          ...currentScenarioInput(),
          name: key === "base" ? "Base Case" : `Scenario ${key.toUpperCase()}`,
          pressure: preset.pressure,
          temp: preset.temp,
          corrosion: preset.corrosion,
          E: preset.E,
          tolerance: preset.tolerance,
          millTolerance: getScenarioMillTolerance(preset.material, preset.tolerance),
          D: preset.od
        };
        const result = calculateScenario(input);
        scenarioState.material = previousActive.material;
        scenarioState.pipeType = previousActive.pipeType;
        scenarioState.active = previousActive.active;
        return result;
      });
      const base = rows[0];
      s.pressureOut.textContent = round(active.pressure, 2);
      s.tempOut.textContent = round(active.temp, 0);
      s.corrosionOut.textContent = round(active.corrosion, 2);
      s.eOut.textContent = round(active.E, 2);
      s.toleranceOut.textContent = active.millTolerance.mode === "fixed_mm"
        ? formatMillToleranceValue(active.millTolerance.value, active.millTolerance.mode)
        : round(active.millTolerance.value, 2);
      s.odOut.textContent = round(active.D, 1);
      if (s.stress) {
        const stressAvailable = Number.isFinite(active.S);
        s.stress.value = stressAvailable ? round(active.S, 3) : "N/A";
        s.stress.classList.toggle("scenario-unavailable", !stressAvailable);
      }
      s.req.textContent = Number.isFinite(active.required) ? round(active.required) : "N/A";
      s.req.classList.toggle("scenario-unavailable-text", !Number.isFinite(active.required));
      s.schedule.textContent = active.schedule ? active.schedule.sch : "Not available";
      s.schedule.classList.toggle("scenario-unavailable-text", !active.schedule);
      s.scheduleThk.textContent = Number.isFinite(active.scheduleThickness) ? `${round(active.scheduleThickness)} mm` : "Check S / T";
      s.scheduleThk.classList.toggle("scenario-unavailable-text", !Number.isFinite(active.scheduleThickness));
      s.table.innerHTML = rows.map(row => {
        const requiredText = Number.isFinite(row.required) ? round(row.required, 2) : "N/A";
        const scheduleText = row.schedule ? escapeHtml(row.schedule.sch) : "Not found";
        return `<tr>
          <td>${escapeHtml(row.name)}</td>
        <td>${escapeHtml(row.material)}</td>
          <td>${round(row.pressure, 2)}</td>
          <td>${round(row.temp, 0)}</td>
          <td class="${Number.isFinite(row.required) ? "" : "scenario-unavailable-cell"}">${requiredText}</td>
          <td class="${row.schedule ? "" : "scenario-unavailable-cell"}">${scheduleText}</td>
        </tr>`;
      }).join("");

      const maxRequired = Math.max(...rows.map(row => Number.isFinite(row.required) ? row.required : 0), 1);
      s.bars.innerHTML = rows.map(row => `
        <div class="scenario-bar-row">
          <span>${escapeHtml(row.name)}</span>
          <div class="scenario-bar-track"><div class="scenario-bar-fill" style="width:${Number.isFinite(row.required) ? Math.min(100, (row.required / maxRequired) * 100) : 0}%"></div></div>
          <strong class="${Number.isFinite(row.required) ? "" : "scenario-unavailable-text"}">${Number.isFinite(row.required) ? round(row.required, 2) : "N/A"}</strong>
        </div>
      `).join("");
    }

    function initScenarioPlayground() {
      const s = scenarioEls();
      if (!s.pressure) return;
      ["pressure", "temp", "corrosion", "e", "tolerance", "od"].forEach(key => {
        s[key].addEventListener("input", () => {
          scenarioState.active = "custom";
          syncScenarioButtons();
          renderScenarioPlayground();
        });
      });
      document.querySelectorAll("[data-scenario-tab]").forEach(btn => {
        btn.addEventListener("click", () => applyScenarioPreset(btn.dataset.scenarioTab));
      });
      document.querySelectorAll("[data-pipe-type]").forEach(btn => {
        btn.addEventListener("click", () => {
          scenarioState.pipeType = btn.dataset.pipeType;
          scenarioState.active = "custom";
          syncScenarioButtons();
          renderScenarioPlayground();
        });
      });
      s.materialSelect.addEventListener("change", () => {
        scenarioState.material = s.materialSelect.value;
        scenarioState.active = "custom";
        syncScenarioMillToleranceControl(true);
        syncScenarioButtons();
        renderScenarioPlayground();
      });
      populateScenarioMaterialDropdown(els.material.value || sampleCase.material);
      applyScenarioPreset("base");
    }

    initSidebarNavigation();
    initThemeToggle();

    els.nps.addEventListener("change", () => {
      const entry = pipeLibrary[els.nps.value];
      if (entry) els.od.value = entry.od;
    });
    els.pressureUnit.addEventListener("change", syncPressureInputLimits);
    els.millToleranceMode.addEventListener("change", () => {
      syncMillToleranceControl();
      const row = els.millToleranceMode.closest(".smart-row");
      if (row) row.classList.remove("input-invalid");
      calculate();
    });
    els.scheduleSource.addEventListener("change", () => {
      setActiveScheduleLibrary();
      calculate();
    });
    [els.material, els.pipeType, els.materialVariant, els.temperature].forEach(el => {
      el.addEventListener("change", () => {
        applyAutoFillFactors();
        calculate();
      });
    });
    [
      els.pressure,
      els.temperature,
      els.corrosion,
      els.tolerance,
      els.od,
      els.stress,
      els.quality,
      els.wFactor,
      els.yFactor
    ].forEach(el => {
      el.addEventListener("input", () => {
        const row = el.closest(".smart-row");
        if (row) row.classList.remove("input-invalid");
      });
    });
    els.calculateBtn.addEventListener("click", () => calculate({ syncScenarioBase: true, showPopup: true }));
    els.exampleBtn.addEventListener("click", loadExample);
    els.resetBtn.addEventListener("click", resetForm);
    els.copyBtn.addEventListener("click", copyReport);
    els.printBtn.addEventListener("click", () => window.print());
    els.reportPrintBtn.addEventListener("click", printAuditReport);
    els.reportExcelBtn.addEventListener("click", exportAuditExcel);
    els.reportToggleBtn.addEventListener("click", () => {
      const panel = document.querySelector(".report-panel");
      const collapsed = panel.classList.toggle("collapsed");
      els.reportToggleBtn.textContent = collapsed ? "Show Report" : "Hide Report";
      els.reportToggleBtn.setAttribute("aria-expanded", String(!collapsed));
    });
    els.scenarioToggleBtn.addEventListener("click", () => {
      const panel = document.querySelector(".scenario-panel");
      const collapsed = panel.classList.toggle("collapsed");
      els.scenarioToggleBtn.textContent = collapsed ? "Show What-if Lab" : "Hide What-if Lab";
      els.scenarioToggleBtn.setAttribute("aria-expanded", String(!collapsed));
    });
    els.csvBtn.addEventListener("click", exportCsv);

    Promise.all([loadScheduleLibraries(), loadEngineeringLibraries()]).finally(() => {
      initializeDefaultForm();
      initScenarioPlayground();
    });

