
const SAMPLE = "`[27, 9, -6, 21, 14, 3, 33, -12, 18, 11]`";

export const posts = [
  {
    slug: "sorting-algorithms-visualized",
    title: "Sorting Algorithms",
    date: "2026-11-18",
    excerpt:
      "Bubble, insertion, selection, merge and quick sort.",
    tags: ["Algorithms", "Python"],
    cover: "/videos/quick.jpg",
    // Put the link to your visualizer repository here and a button will appear on the post.
    repoUrl: "",
    blocks: [
      {
        type: "p",
        text:
          "Sorting algorithms are something we come across repeatedly throughout our programming journey. We learn them, implement them, and sometimes forget how they actually work. But have you ever wondered what really happens behind those lines of code? I wanted to revisit some of the most common sorting algorithms, not just by reading their logic or memorizing their time complexities, but by actually watching them work. In this blog, I've put together visualizations of five popular sorting algorithms: **Bubble Sort, Insertion Sort, Selection Sort, Merge Sort, and Quick Sort.** Each one sorts the same set of numbers, allowing us to observe how they approach the same problem differently. So, Let's sort things out!",
      },


      { type: "h2", text: "How to read the videos" },

      {
        type: "ul",
        items: [
          "**Height is the value.** A dashed line marks zero, and negative numbers stop below it.",
          "**Labelled pointers** such as `j`, `i`, `p`, `q` and `k` show which index plays which role at each step.",
          "**A comparison bubble** such as `9 <= 2 ?` appears every time two values are compared, and its answer decides what happens next.",
          "**Bars turn green** when they reach their final position and will never move again.",
          "**The legend** under each video explains the colours used by that algorithm.",
        ],
      },
      

      { type: "h2", text: "The cheat sheet" },
      {
        type: "p",
        text:
          "Two words come up in almost every sorting question. A sort is **stable** if equal elements keep their original order. It is **in place** if it needs only a small amount of extra memory.",
      },
      {
        type: "table",
        head: ["Algorithm", "Best", "Average", "Worst", "Extra space", "Stable"],
        rows: [
          ["Bubble (with early exit)", "O(n)", "O(n²)", "O(n²)", "O(1)", "Yes"],
          ["Insertion", "O(n)", "O(n²)", "O(n²)", "O(1)", "Yes"],
          ["Selection", "O(n²)", "O(n²)", "O(n²)", "O(1)", "No"],
          ["Merge", "O(n log n)", "O(n log n)", "O(n log n)", "O(n)", "Yes"],
          ["Quick", "O(n log n)", "O(n log n)", "O(n²)", "O(log n) stack", "No"],
        ],
      },

      // ------------------------------------------------------------------ bubble
      { type: "h2", text: "1. Bubble sort" },
      {
        type: "p",
        text:
          "Compare neighbours and swap them when they are in the wrong order. After one full pass the largest value has bubbled to the end, so the next pass can stop one place earlier.",
      },
      {
        type: "video",
        src: "/videos/bubble.mp4",
        poster: "/videos/bubble.jpg",
        width: 960,
        height: 576,
        title: "Bubble sort visualization",
        caption: "Bubble sort on ten numbers. Listen for the repeated ticks of each pass.",
      },
      { type: "h3", text: "What to notice" },
      {
        type: "ul",
        items: [
          "The largest unsorted bar travels to the right on every pass and turns green at the end.",
          "On this input it needed **44 comparisons and 25 swaps**.",
          "If a whole pass makes no swaps the array is already sorted, so we stop. That early exit is what makes the best case O(n).",
        ],
      },
      {
        type: "code",
        lang: "python",
        code: `def bubble_sort(a):
    n = len(a)
    for p in range(n - 1):
        swapped = False
        for j in range(n - 1 - p):
            if a[j] > a[j + 1]:
                a[j], a[j + 1] = a[j + 1], a[j]
                swapped = True
        if not swapped:      # a full pass with no swaps: already sorted
            break
    return a`,
      },
      

      // --------------------------------------------------------------- insertion
      { type: "h2", text: "2. Insertion sort" },
      {
        type: "p",
        text:
          "Grow a sorted prefix. Take the next element, called the key, and slide it left until it meets something smaller or equal.",
      },
      {
        type: "video",
        src: "/videos/insertion.mp4",
        poster: "/videos/insertion.jpg",
        width: 960,
        height: 576,
        title: "Insertion sort visualization",
        caption: "Insertion sort. Watch the key hop left until it finds its place.",
      },
      { type: "h3", text: "What to notice" },
      {
        type: "ul",
        items: [
          "The prefix on the left is sorted but **not final yet**, because a later key can still land in the middle of it.",
          "Only **31 comparisons** here, fewer than bubble sort's 44 on the same input, because each key stops as soon as it finds its spot.",
          "On an already sorted list it makes n - 1 comparisons and no moves. That is the O(n) best case.",
        ],
      },
      {
        type: "code",
        lang: "python",
        caption:
          "The video moves the key with adjacent swaps. This version shifts values instead, which does the same job with fewer writes.",
        code: `def insertion_sort(a):
    for i in range(1, len(a)):
        key = a[i]
        j = i - 1
        while j >= 0 and a[j] > key:
            a[j + 1] = a[j]      # shift bigger values right
            j -= 1
        a[j + 1] = key
    return a`,
      },
      

      // --------------------------------------------------------------- selection
      { type: "h2", text: "3. Selection sort" },
      {
        type: "p",
        text: "Find the smallest remaining value, swap it to the front, and repeat on the rest.",
      },
      {
        type: "video",
        src: "/videos/selection.mp4",
        poster: "/videos/selection.jpg",
        width: 960,
        height: 576,
        title: "Selection sort visualization",
        caption: "Selection sort. Long scans, then a single swap.",
      },
      { type: "h3", text: "What to notice" },
      {
        type: "ul",
        items: [
          "Long runs of ticks while it scans for the minimum, then exactly one swap.",
          "Just **9 swaps** for 10 numbers (never more than n - 1), but **45 comparisons**, which is always n(n - 1) / 2 whatever the input looks like.",
          "It is **not stable**: the long-distance swap can jump an element over an equal one.",
        ],
      },
      {
        type: "code",
        lang: "python",
        code: `def selection_sort(a):
    n = len(a)
    for i in range(n - 1):
        m = i                    # index of the smallest value seen so far
        for j in range(i + 1, n):
            if a[j] < a[m]:
                m = j
        a[i], a[m] = a[m], a[i]
    return a`,
      },
      

      // ------------------------------------------------------------------- merge
      { type: "h2", text: "4. Merge sort" },
      {
        type: "p",
        text:
          "Split the array in half until single elements remain, then merge sorted halves back together by repeatedly taking the smaller front element.",
      },
      {
        type: "video",
        src: "/videos/merge.mp4",
        poster: "/videos/merge.jpg",
        width: 960,
        height: 786,
        title: "Merge sort visualization",
        caption: "Merge sort. Watch the helper buffer at the bottom of the screen.",
      },
      { type: "h3", text: "What to notice" },
      {
        type: "ul",
        items: [
          "A **helper buffer** appears under the bars. Both halves are copied there, pointers `p` and `q` walk through them, and the winner is written back at index `k`.",
          "Only **23 comparisons**, but **34 writes**, because every merge copies values back into the array.",
          "The amount of work never depends on the input: always O(n log n), at the cost of O(n) extra space.",
        ],
      },
      {
        type: "code",
        lang: "python",
        code: `def merge_sort(a):
    if len(a) <= 1:
        return a
    mid = len(a) // 2
    left, right = merge_sort(a[:mid]), merge_sort(a[mid:])

    out, i, j = [], 0, 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:      # <= keeps equal items in order (stable)
            out.append(left[i]); i += 1
        else:
            out.append(right[j]); j += 1
    return out + left[i:] + right[j:]`,
      },
      

      // ------------------------------------------------------------------- quick
      { type: "h2", text: "5. Quick sort" },
      {
        type: "p",
        text:
          "Pick a pivot and partition the array so that everything smaller or equal is on its left and everything bigger is on its right. The pivot is now in its final position. Recurse on both sides.",
      },
      {
        type: "video",
        src: "/videos/quick.mp4",
        poster: "/videos/quick.jpg",
        width: 960,
        height: 576,
        title: "Quick sort visualization",
        caption: "Quick sort with the last element as the pivot.",
      },
      { type: "h3", text: "What to notice" },
      {
        type: "ul",
        items: [
          "The red bar is the pivot. After each partition exactly one bar turns green, and the highlighted range shrinks.",
          "**23 comparisons and only 11 swaps** on this input.",
          "The worst case needs a bad pivot. Give it ten numbers that are already sorted, with the last element as pivot, and every partition peels off a single element: **45 comparisons**. With median-of-three pivots the same input takes **19**.",
        ],
      },
      {
        type: "code",
        lang: "python",
        code: `def quick_sort(a, lo=0, hi=None):
    if hi is None:
        hi = len(a) - 1
    if lo < hi:
        pivot, i = a[hi], lo - 1          # Lomuto partition, last element as pivot
        for j in range(lo, hi):
            if a[j] <= pivot:
                i += 1
                a[i], a[j] = a[j], a[i]
        a[i + 1], a[hi] = a[hi], a[i + 1]  # the pivot lands in its final spot
        quick_sort(a, lo, i)
        quick_sort(a, i + 2, hi)
    return a`,
      },
      
      
      {
        type: "p",
        text:
          "If this helped you, or you spot a mistake, I would love to hear about it. You can reach me from the [contact section](/#contact).",
      },
    ],
  },
];

export function getAllPosts() {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug);
}

// Rough reading time: ~200 words per minute, code blocks excluded.
export function getReadingTime(post) {
  const words = post.blocks
    .map((b) => {
      if (b.type === "p" || b.type === "h2" || b.type === "h3") return b.text;
      if (b.type === "ul" || b.type === "ol") return b.items.join(" ");
      if (b.type === "callout") return `${b.title} ${b.text}`;
      if (b.type === "qa") return `${b.q} ${b.a.join(" ")}`;
      if (b.type === "table") return [...b.head, ...b.rows.flat()].join(" ");
      return "";
    })
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export function formatDate(iso) {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
