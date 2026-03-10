import requests

def analyze_industry(industry):

    prompt = f"""
    Give market outlook for {industry}.
    Include risks, growth potential and policy changes.
    """

    # placeholder LLM call
    result = {
        "industry": industry,
        "outlook": "moderate growth expected"
    }

    return result