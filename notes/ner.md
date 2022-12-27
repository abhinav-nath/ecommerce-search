# Named-Entity Recognition (NER)

Named-Entity Recognition (NER) or Entity Extraction, scans search queries to identify and classify words or phrases into predefined categories, such as names of people, brands, products, locations, styles, colors, quantities, monetary values, percentages, and many other features.
These predefined categories (mostly) represent real-world objects and are described by proper nouns.

Consider the search query `latest black plaid sweater dress`.
Here the product attributes, or features are the `latest`, `black`, `plaid`, and `sweater dress`.
The output of NER may be `latest black_color plaid_pattern sweater_dress_category_type`; where `color`, `pattern`, and `category_type` are the predefined categories, and `black`, `plaid`, and `sweater dress` are their values.

<div align="center">
  <img src="../images/ner.png" width="400"/>
</div>

In this process, the NER algorithm extracted the entities' `black`, `plaid`, and `sweater dress` and put them into their respective categories.

For example, in the query `Calvin Klein shoes`, the NER model may identify `Calvin Klein` as a **brand name** and `shoes` as a **product type**.

Similarly, in the query `brown shoe polish`, `shoe polish` should be extracted as one compound entity, which is the product type here.
If the entity isn't recognized as a compound token, results may contain `shoes`, `nail polish`, or anything that matches the individual keyword.

Entity extraction plays a key role in identifying the phrases and avoiding possible irrelevant results for the end shopper.

NER is the initial step in the search algorithm.
The entity extraction model finds the significance of words in a search query to understand the users' intent concerning a specific product catalog while using historical data points.
Then further algorithms are applied to this query.

## NER Models for eCommerce

### [spaCy](https://spacy.io/models/)

This NER model uses a transition learning model coupled with **Convoluted Neural Networks (CNN)**.
In this model, the input query passes through multiple states, where a decision is made at each state to generate the label for that state.
As it is a neural network-based solution, the model takes a significant time to train, and the performance of the model was lower than other approaches.
The python based free and open-source NLP library spaCy is used for this model.
So for a sample query, `Lenovo mouse`, spaCy would predict `Lenovo` as the **brand** or **company** and `mouse` as the **product**.

### [Stanford core NLP NER tagger](https://nlp.stanford.edu/software/CRF-NER.html)

This Java implementation of NER uses **Conditional Random Fields (CRF)**, and thus it is also known as **CRFClassifier**.
The model maximizes the conditional probability of tagging the entire query as per the training data.
Since the CRF models try to maximize conditional tagging, the recall is less unless we have huge datasets.
