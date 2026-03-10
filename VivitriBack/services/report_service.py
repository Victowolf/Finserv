from database.mongo import reports

def save_report(application_id, report_type, data):

    reports.insert_one({
        "application_id": application_id,
        "type": report_type,
        "data": data
    })

    return True