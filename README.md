# Add Shortcuts to Vocabulary.com

Customized UserScript to be installed on GreaseMonkey/TamperMonkey.

I've been an intensive user of [Vocabulary.com](Vocabulary.com), which I find useful for both looking up usages and learning new words.

Since two weeks ago, I've been using the customer lists to learn vocabularies. There are about 3500 words to learn, grouped into 50 lists, a long way to go. With such a big task, fast navigation is not only desirable but also necessary. As 1 more second spent on each word accumulates to 1 hour in total, a cost I cannot afford.

Unfortunately, neither the mobile app nor its website has good shortcuts in list views. They don't have documentation for such needs, nor do I found anything by marking all accesskeys out.

I decided to add my own shortcuts to the website. And here's it is. Basically each word has a list item entry such as `entry45`, as shown in the `list_snippet.html`. Incrementing/Decrementing the number lead to next/prev word. Key monitoring support comes from a compact yet powerful library [MouseTrap](http://craig.is/killing/mice), aka mouse-free. It's externally referenced by the `@required` field.

### Usage:
1. Install the script with GreaseMonkey on Firefox, TamperMonkey on Chrome.
2. In a list view, for example the [100 SAT Words](http://www.vocabulary.com/lists/148703#view=definitions&word=accord)  
   <kbd>[</kbd> to move to next word  
   <kbd>\</kbd> to move to previous word
   <kbd>]</kbd> to trigger pronounciation. This also works in non-list view.

The keys can be overwritten by ones you'd like. See comments for details.