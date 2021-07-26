---
title: "Blogs"
layout: "base.ejs"
---

# <%- title %>

---

<% collections.blogs.forEach(function(blog){ %>

## <a class="" href="<%- blog.url %>"><%- blog.data.title %></a>

<% }) %>

---
