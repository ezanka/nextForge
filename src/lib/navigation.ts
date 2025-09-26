import { sidebarItems } from "@/src/components/layout/global/sidebar-items";

type NavigationItem = {
    title: string;
    url: string;
};

type NavigationSection = {
    title: string;
    icon?: React.ComponentType;
    items?: (NavigationItem | NavigationSection)[];
    url?: string;
};

export function flattenNavigation(
    items: typeof sidebarItems
): Array<{ title: string; url: string }> {
    const result: Array<{ title: string; url: string }> = [];

    function traverse(items: (NavigationItem | NavigationSection)[]) {
        for (const item of items) {
        if ("url" in item && item.url) {
            result.push({ title: item.title, url: item.url });
        } else if ("items" in item && Array.isArray(item.items)) {
            traverse(item.items);
        }
        }
    }

    traverse(items);
    return result;
}

export function getNextPage(
    currentUrl: string,
    navigation: Array<{ title: string; url: string }>
) {
    const currentIndex = navigation.findIndex((page) => page.url === currentUrl);

    if (currentIndex === -1 || currentIndex === navigation.length - 1) {
        return null;
    }

    return navigation[currentIndex + 1];
}

export function getPreviousPage(
    currentUrl: string,
    navigation: Array<{ title: string; url: string }>
) {
    const currentIndex = navigation.findIndex((page) => page.url === currentUrl);

    if (currentIndex === -1 || currentIndex === 0) {
        return null;
    }

    return navigation[currentIndex - 1];
}
