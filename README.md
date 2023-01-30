# Bloom Filters

Create a basic bloom filter data structure in Javascript

# Description

- Is a probabilistic data structure that is used to test whether an element is a member of a set
- False positive matches are posible, but false negatives not
- Elements can be added to the set, but not removed

# Why is useful?

- Bloom filters have a strong space advantage over other data structures for representing sets.
- Bloom filter used to speed up answers in a key-value storage system

# Examples

1. Google Bigtable use Bloom filters to reduce the disk lookups for non-existent rows or columns. 
2. Ethereum uses Bloom filters for quickly finding logs on the Ethereum blockchain.
3. Akamai (CDN) use Bloom filters to prevent "one-hit-wonders" from being stored in its disk caches.

# Implementation

**The default size for the set when is created all the values are "0"**

<img src="https://github.com/mtorre4580/bloom-filters/blob/main/empty_bloom_filters.png" alt="empty bloom filters" />

**When item is added to the set, hash the value with two functions (hash1, hash2, hash3) and store the result in the set via index setting "1" for true**

<img src="https://github.com/mtorre4580/bloom-filters/blob/main/bloom_filters.png" alt="bloom filters with hashes" />

**When item is check, you need to obteain the hashes and check if both are true ("1"), if is true "possibly in set" if not "definitely not in set"**

