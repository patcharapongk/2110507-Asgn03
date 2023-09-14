# Infocard Structure

This file explains a file structure of `InfoCard` and why does it have two files.

- InfoCard is a server component.
- InteractiveCard is a client component.

We have the card structure like:

```
<InfoCard> -- Server component
    <InteractiveCard/> -- Client component
</InfoCard>
```

This way we separated server/client side to reduce client rendering power!
