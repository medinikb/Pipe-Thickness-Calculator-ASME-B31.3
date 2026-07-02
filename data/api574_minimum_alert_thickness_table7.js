window.API574_MINIMUM_ALERT_THICKNESS_TABLE7 = {
  "library_name": "api574_minimum_alert_thickness_table7",
  "library_version": "1.0.0",
  "source_standard": "API 574:2016",
  "source_edition_year": 2016,
  "section": "12.1.5",
  "table": "Table 7",
  "table_title": "Minimum Thicknesses for Carbon and Low-alloy Steel Pipe",
  "description": "Minimum structural thickness and minimum alert thickness reference values for carbon steel and low-alloy steel pipe at temperatures below 400 °F / 205 °C.",
  "application": {
    "material_scope": [
      "Carbon steel pipe",
      "Low-alloy steel pipe"
    ],
    "temperature_limit": {
      "operator": "less_than",
      "max_temperature_f": 400,
      "max_temperature_c": 205,
      "note": "Applicable for temperatures below 400 °F / 205 °C. If design temperature is at or above this limit, engineering review is required."
    },
    "nps_limit": {
      "min_nps": 0.5,
      "max_nps": 24,
      "note": "Applicable only for listed NPS ranges up to NPS 24. Pipe sizes above NPS 24 require engineering review."
    },
    "intended_use": [
      "Web app reference check for minimum structural thickness",
      "Web app warning trigger for minimum alert thickness",
      "In-service piping inspection screening",
      "Remaining life assessment trigger",
      "Fitness-for-Service assessment trigger",
      "Future repair or replacement planning trigger"
    ],
    "important_note": "This table does not replace ASME B31.3 pressure design thickness calculation. For thickness verification, compare the ASME B31.3 calculated pressure design thickness with the applicable minimum structural thickness and use the governing requirement as per engineering judgment. Minimum alert thickness is an inspection warning trigger, not an automatic retirement thickness."
  },
  "units": {
    "nps": "Nominal Pipe Size",
    "thickness_in": "inch",
    "thickness_mm": "mm",
    "temperature_f": "degree Fahrenheit",
    "temperature_c": "degree Celsius"
  },
  "warning_message": {
    "message": "Consult with your Engineering Department",
    "trigger_conditions": [
      "Pipe NPS is greater than 24",
      "Pipe NPS is not covered by the listed NPS ranges",
      "Design temperature is greater than or equal to 400 °F",
      "Design temperature is greater than or equal to 205 °C",
      "Pipe material is outside carbon steel or low-alloy steel scope",
      "Service condition requires detailed engineering review",
      "Calculated result conflicts with project specification or statutory requirement"
    ]
  },
  "web_app_logic_recommendation": {
    "step_1": "Calculate pressure design thickness as per ASME B31.3 using the selected material, design pressure, design temperature, outside diameter, allowable stress, weld joint quality factor, coefficient Y, corrosion allowance, and mill tolerance where applicable.",
    "step_2": "Check whether API 574:2016 Table 7 is applicable based on material group, NPS, and design temperature.",
    "step_3": "If applicable, compare the ASME B31.3 calculated thickness with the default minimum structural thickness from this table.",
    "step_4": "Use the minimum alert thickness as an inspection warning trigger, not as an automatic retirement limit.",
    "step_5": "If the pipe size is above NPS 24 or the design temperature is outside the table limit, display the warning message: Consult with your Engineering Department."
  },
  "data": [
    {
      "id": "api574_2016_table7_nps_0_5_to_1",
      "nps_range_label": "1/2 to 1",
      "nps_min": 0.5,
      "nps_max": 1,
      "covered_nps_values": [
        0.5,
        0.75,
        1
      ],
      "default_minimum_structural_thickness": {
        "inch": 0.07,
        "mm": 1.8
      },
      "minimum_alert_thickness": {
        "inch": 0.08,
        "mm": 2.0
      }
    },
    {
      "id": "api574_2016_table7_nps_1_5",
      "nps_range_label": "1 1/2",
      "nps_min": 1.5,
      "nps_max": 1.5,
      "covered_nps_values": [
        1.5
      ],
      "default_minimum_structural_thickness": {
        "inch": 0.07,
        "mm": 1.8
      },
      "minimum_alert_thickness": {
        "inch": 0.09,
        "mm": 2.3
      }
    },
    {
      "id": "api574_2016_table7_nps_2",
      "nps_range_label": "2",
      "nps_min": 2,
      "nps_max": 2,
      "covered_nps_values": [
        2
      ],
      "default_minimum_structural_thickness": {
        "inch": 0.07,
        "mm": 1.8
      },
      "minimum_alert_thickness": {
        "inch": 0.10,
        "mm": 2.5
      }
    },
    {
      "id": "api574_2016_table7_nps_3",
      "nps_range_label": "3",
      "nps_min": 3,
      "nps_max": 3,
      "covered_nps_values": [
        3
      ],
      "default_minimum_structural_thickness": {
        "inch": 0.08,
        "mm": 2.0
      },
      "minimum_alert_thickness": {
        "inch": 0.11,
        "mm": 2.8
      }
    },
    {
      "id": "api574_2016_table7_nps_4",
      "nps_range_label": "4",
      "nps_min": 4,
      "nps_max": 4,
      "covered_nps_values": [
        4
      ],
      "default_minimum_structural_thickness": {
        "inch": 0.09,
        "mm": 2.3
      },
      "minimum_alert_thickness": {
        "inch": 0.12,
        "mm": 3.1
      }
    },
    {
      "id": "api574_2016_table7_nps_6_to_18",
      "nps_range_label": "6 to 18",
      "nps_min": 6,
      "nps_max": 18,
      "covered_nps_values": [
        6,
        8,
        10,
        12,
        14,
        16,
        18
      ],
      "default_minimum_structural_thickness": {
        "inch": 0.11,
        "mm": 2.8
      },
      "minimum_alert_thickness": {
        "inch": 0.13,
        "mm": 3.3
      }
    },
    {
      "id": "api574_2016_table7_nps_20_to_24",
      "nps_range_label": "20 to 24",
      "nps_min": 20,
      "nps_max": 24,
      "covered_nps_values": [
        20,
        22,
        24
      ],
      "default_minimum_structural_thickness": {
        "inch": 0.12,
        "mm": 3.1
      },
      "minimum_alert_thickness": {
        "inch": 0.14,
        "mm": 3.6
      }
    }
  ]
};
