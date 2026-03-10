from services.vector_service import query_vector_db
from services.report_service import save_report

def run_compliance(application_id):

    results = query_vector_db(
        "GST mismatch revenue bank transaction fraud"
    )

    flags = []

    for match in results["matches"]:

        text = match["metadata"]["text"]

        if "mismatch" in text.lower():
            flags.append("GST mismatch suspected")

    report = {
        "flags": flags
    }

    save_report(application_id, "credibility_report", report)

    return report