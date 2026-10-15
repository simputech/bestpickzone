import importlib.util
import unittest
from pathlib import Path
spec = importlib.util.spec_from_file_location('commerce', Path(__file__).with_name('audit-article-commerce.py'))
audit = importlib.util.module_from_spec(spec)
spec.loader.exec_module(audit)

class ArticleScopeTests(unittest.TestCase):
    def test_raw_article_wrapper_inherits_scope(self):
        p = audit.Page()
        p.feed('<header><a href="https://amazon.com/shop/global">Global</a></header><div class="flex-1"><div><h1>Raw article</h1><p>Choose by fit.</p><a href="https://amazon.com/dp/EXAMPLE?tag=althcu-20">Check model</a></div></div><footer><a href="https://amazon.com/shop/global">Global</a></footer>')
        self.assertEqual([a['text'] for a in p.links], ['Check model'])
        self.assertEqual(p.h1, 'Raw article')
        self.assertTrue(any(b['text'] == 'Choose by fit.' for b in p.blocks))

    def test_script_payload_does_not_count_as_editorial_copy(self):
        p = audit.Page()
        p.feed('<main><script>{"name":"Fake prose"}</script><p>Actual prose.</p></main>')
        self.assertNotIn('Fake prose', ' '.join(p.text))
        self.assertIn('Actual prose.', ' '.join(p.text))

    def test_pilot_outside_main_is_counted_once(self):
        p = audit.Page()
        p.feed('<main><h1>Guide</h1></main><div data-organic-pilot="grandparentsgift-20" data-amazon-source="fallback"><a href="https://amazon.com/s?k=book">Search</a></div>')
        self.assertEqual(p.api, ['fallback'])
        self.assertEqual(len(p.links), 1)

    def test_api_marker_is_distinct_from_direct_product_link(self):
        p = audit.Page()
        p.feed('<main><a href="https://amazon.com/dp/EXAMPLE">Product</a></main>')
        self.assertEqual(p.api, [])
        self.assertEqual(len(p.links), 1)

if __name__ == '__main__':
    unittest.main()
